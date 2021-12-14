import { Inquirer } from 'inquirer';
import Config from '../config.json';
import { modules } from '../common';

const getComponentInquirer = (inquirer:Inquirer, options:any) => inquirer.prompt([
    {
        message: 'What is the filename of the new component?',
        name: 'filename',
        validate: (value) => {
            if (!value) {
                return 'Filename is required';
            }
            return true;
        },
    },
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
    {
        message: 'What extension to use?',
        default: Config.jsExtension,
        name: 'fileExtension',
        when: (prevAnswers) => !options.defaults && !prevAnswers.useTypescript,
        validate: (value: string) => {
            if (!value.startsWith('.')) {
                return 'Please enter extension in the format [.jsx | .js]';
            }
            return true;
        },
    },
    {
        type: 'confirm',
        message: 'Will your component receive props?',
        default: Config.template.hasProps,
        name: 'hasProps',
    },
]);

export default getComponentInquirer;
