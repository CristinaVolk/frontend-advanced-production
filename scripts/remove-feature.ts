import { JsxAttribute, Node, Project, SyntaxKind } from 'ts-morph';

const removeFeatureName = process.argv[2]; // ex. isArticleEnabled
const featureState = process.argv[3]; // ex. off/on

const toggleFunctionName = 'toggleFeatures';
const toggleComponentName = 'ToggleFeatures';

if (!removeFeatureName) {
    throw new Error('Please enter the name of the feature to remove');
}

if (!featureState) {
    throw new Error(
        'Please enter the state of the feature to remove `on` or `off`',
    );
}

if (!(featureState === 'off' || featureState === 'on')) {
    throw new Error(
        'Please enter the correct state of the feature `on` or `off`',
    );
}

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.tsx');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();

function isToggleFunction(node: Node) {
    let isToggleFeatures = false;

    node.forEachChild((child) => {
        if (
            child.isKind(SyntaxKind.Identifier) &&
            child.getText() === toggleFunctionName
        ) {
            isToggleFeatures = true;
        }
    });
    return isToggleFeatures;
}

function isToggleComponent(node: Node) {
    const identifier = node.getFirstDescendantByKind(SyntaxKind.Identifier);
    return identifier?.getText() === toggleComponentName;
}

const replaceToggleFunction = (node: Node) => {
    const objectOptions = node.getFirstDescendantByKind(
        SyntaxKind.ObjectLiteralExpression,
    );

    if (!objectOptions) {
        return;
    }
    const offFunctionProperty = objectOptions.getProperty('off');
    const onFunctionProperty = objectOptions.getProperty('on');
    const featureNameProperty = objectOptions.getProperty('name');

    const onFunction = onFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
    );
    const offFunction = offFunctionProperty?.getFirstDescendantByKind(
        SyntaxKind.ArrowFunction,
    );

    const featureName = featureNameProperty
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        .slice(1, -1);

    if (featureName !== removeFeatureName) {
        return;
    }

    if (featureState === 'on') {
        node.replaceWithText(onFunction?.getBody().getText() ?? '');
    }
    if (featureState === 'off') {
        node.replaceWithText(offFunction?.getBody().getText() ?? '');
    }
};

function getAttributeNodeByName(jsxAttributes: JsxAttribute[], name: string) {
    return jsxAttributes.find((node) => node.getName() === name);
}

const getReplacedComponent = (attribute: JsxAttribute) => {
    const value = attribute
        ?.getFirstDescendantByKind(SyntaxKind.JsxExpression)
        ?.getExpression()
        ?.getText();

    if (value?.startsWith('(')) {
        return value.slice(1, -1);
    }

    return value;
};

const replaceToggleComponent = (node: Node) => {
    const attributes = node.getDescendantsOfKind(SyntaxKind.JsxAttribute);

    const onAttribute = getAttributeNodeByName(attributes, 'on');
    const offAttribute = getAttributeNodeByName(attributes, 'off');
    const featureNameAttribute = getAttributeNodeByName(attributes, 'feature');

    const featureName = featureNameAttribute
        ?.getFirstDescendantByKind(SyntaxKind.StringLiteral)
        ?.getText()
        ?.slice(1, -1);

    if (featureName !== removeFeatureName) {
        return;
    }

    const onValue = getReplacedComponent(onAttribute!);

    const offValue = getReplacedComponent(offAttribute!);

    if (featureState === 'on' && onValue) {
        node.replaceWithText(onValue);
    }
    if (featureState === 'off' && offValue) {
        node.replaceWithText(offValue);
    }
};

files.forEach((sourceFile) => {
    // eslint-disable-next-line consistent-return
    sourceFile.forEachDescendant((node) => {
        if (node.isKind(SyntaxKind.CallExpression) && isToggleFunction(node)) {
            return replaceToggleFunction(node);
        }

        if (
            node.isKind(SyntaxKind.JsxSelfClosingElement) &&
            isToggleComponent(node)
        ) {
            return replaceToggleComponent(node);
        }
    });
});

project.save();
