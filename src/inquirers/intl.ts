import { Inquirer } from 'inquirer';
import { modules } from '../common';
import Config from '../config.json';

const getIntlInquirer = (inquirer: Inquirer, options:any) => inquirer.prompt([
    {
        type: 'search-list',
        message: 'Select module',
        name: 'module',
        choices: modules,
    },
    {
        message: 'What should be the name of the intl file? "-en.json" will be suffixed automatically',
        name: 'intlFilename',
        default: Config.intlFilename,
        when: () => !options.defaults,
    },
]);

export default getIntlInquirer;
