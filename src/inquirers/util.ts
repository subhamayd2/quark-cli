import { Inquirer } from 'inquirer';
import { modules } from '../common';
import Config from '../config.json';

const getUtilInquirer = (inquirer: Inquirer, options:any) => inquirer.prompt([
    {
        type: 'search-list',
        message: 'Select module',
        name: 'module',
        choices: modules,
    },
    {
        type: 'confirm',
        message: 'Do you want to use typescript?',
        name: 'useTypescript',
        default: Config.useTypescript,
        when: () => !options.defaults,
    },
]);

export default getUtilInquirer;
