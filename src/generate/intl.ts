import path from 'path';
import fs from 'fs';
import { SRC_PATH, writeFile } from '../common';
import Config from '../config.json';
import templates from '../templates';

type GenerateIntlParams = {
    module: string;
    intlFilename?: string;
}

const generateIntl = ({ module, intlFilename = Config.intlFilename }:GenerateIntlParams) => {
    const dirPath = path.join(SRC_PATH, module, 'i18n');
    fs.mkdirSync(dirPath, { recursive: true });
    writeFile(path.join(dirPath, `${intlFilename}-en.json`), templates.intl);
};

export default generateIntl;
