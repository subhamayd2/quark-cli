import path from 'path';
import fs from 'fs';
import { capitalizeFirst, SRC_PATH, writeFile } from '../common';
import Config from '../config.json';

type GenerateUtilParams = {
    module: string;
    useTypescript?: boolean;
}

const generateUtil = ({ module, useTypescript = Config.useTypescript }:GenerateUtilParams) => {
    const dirPath = path.join(SRC_PATH, module, 'util');
    fs.mkdirSync(dirPath, { recursive: true });
    writeFile(path.join(dirPath, `${capitalizeFirst(module)}Util.${useTypescript ? 'ts' : 'js'}`), '');
};

export default generateUtil;
