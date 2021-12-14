import path from 'path';
import glob from 'glob';
import fs from 'fs';

export const CWD = process.cwd();
export const SRC_PATH = path.join(CWD, 'src');

export const modules = glob.sync(`${SRC_PATH}/*/`, {
    ignore: SRC_PATH,
}).map((file) => {
    const arr = file.split('/');
    return arr[arr.length - 2];
});

// return a string with the first letter capitalized
const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

// return a string with the first letter capitalized
export const capitalizeFirst = (str: string) => {
    if (str.indexOf('.') !== -1) {
        const arr = str.split('.');
        return arr.map((s) => capitalize(s)).join('');
    }
    if (str.indexOf(' ') !== -1) {
        const arr = str.split(' ');
        return arr.map((s) => capitalize(s)).join('');
    }
    return capitalize(str);
};

export const writeFile = (filePath: string, content: string) => {
    fs.writeFileSync(filePath, content);
};
