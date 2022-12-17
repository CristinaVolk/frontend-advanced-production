import { Project } from 'ts-morph';

const project = new Project({});

project.addSourceFilesAtPaths('src/**/*.ts');
project.addSourceFilesAtPaths('src/**/*.tsx');

const files = project.getSourceFiles();
const layers = ['pages', 'entities', 'features', 'shared', 'widgets', 'app'];

const isAbsolute = (path: string) : boolean => layers.some((layer) => path.startsWith(layer));

files.forEach((sourceFile) => {
  const importDeclarations = sourceFile.getImportDeclarations();
  importDeclarations.forEach(((importDeclaration) => {
    const value = importDeclaration.getModuleSpecifierValue();
    if (isAbsolute(value)) {
      importDeclaration.setModuleSpecifier(`@/${value}`);
    }
  }));
});

project.save();
