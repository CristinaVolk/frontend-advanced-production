import { Project } from 'ts-morph';
import path from 'path';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const uiPaths = path.resolve(__dirname, '..', '..', 'src', 'shared', 'ui');
const sharedUIDirectory = project.getDirectory(uiPaths);
const componentsDirectories = sharedUIDirectory?.getDirectories();

componentsDirectories?.forEach((directory) => {
    const indexFilePath = `${directory.getPath()}/index.ts`;
    const indexFile = directory.getSourceFile(indexFilePath);
    if (!indexFile) {
        const sourceCode = `export { ${directory.getBaseName()} } from './${directory.getBaseName()}';`;
        const file = directory.createSourceFile(indexFilePath, sourceCode, {
            overwrite: true,
        });
        file.save();
    }
});

project.save();
