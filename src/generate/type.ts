import path from 'path';
import fs from 'fs';
import { TS_EXTENSION } from '../constants';
import templates from '../templates';
import {
    capitalizeFirst, SRC_PATH, writeFile,
} from '../common';
import Config from '../config.json';

export type TypeParams = {
    filename: string;
    module: string;
    useTypescript?: boolean;
    fileExtension?: string;
    hasProps?: boolean;
}

type GenerateParams = TypeParams & {
    dirPath: string;
}

type GenerateComponentParams = TypeParams & {
    type: string;
}

const generate = ({
    dirPath,
    filename,
    useTypescript = Config.useTypescript,
    fileExtension = Config.jsExtension,
    hasProps = Config.template.hasProps,
}: GenerateParams) => {
    fs.mkdirSync(dirPath, { recursive: true });

    const componentName = capitalizeFirst(filename);

    // .js | .jsx | .tsx
    const extension = useTypescript ? TS_EXTENSION : fileExtension;
    const templateFunction = templates[Config.useTypescript ? 'ts' : 'js'](componentName);
    let content = templateFunction.default;

    if (hasProps) {
        content = templateFunction.hasProps;
    }

    if (Config.template.useReactNamespace) {
        content = templates.useReactNamespace + content;
    }

    writeFile(path.join(dirPath, `${componentName}${extension}`), content);
};

const generateComponent = (params: GenerateComponentParams) => {
    const dirPath = path.join(SRC_PATH, params.module, 'ui', `${params.type}s`);
    generate({ dirPath, ...params });
};

export default generateComponent;
