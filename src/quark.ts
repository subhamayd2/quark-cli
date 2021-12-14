import './polyfills';
import figlet from 'figlet';
import { Command } from 'commander';
import inquirer from 'inquirer';
import inqSearchList from 'inquirer-search-list';
import chalk from 'chalk';
import generateIntl from './generate/intl';
import getComponentInquirer from './inquirers/component';
import generateUtil from './generate/util';
import getUtilInquirer from './inquirers/util';
import generateComponent from './generate/type';
import getIntlInquirer from './inquirers/intl';
import {
    ATOM, MOLECULE, ORGANISM, PAGE, TEMPLATE, UTIL, INTL,
} from './constants';

const program = new Command();
program.showSuggestionAfterError();

inquirer.registerPrompt('search-list', inqSearchList);

program.version(process.env.npm_package_version!, '-v, --version');

program.command('g')
    .alias('generate')
    .description('generate a new Component - e.g. React Component, utils, intl, etc.')
    .usage('["atom" | "molecule" | "organism" | "page" | "template" | "util" | "intl"]')
    .argument('<type>')
    .option('-d, --defaults', 'Use default values')
    .hook('preAction', () => {
        // eslint-disable-next-line no-console
        console.log(chalk.cyan(figlet.textSync('Quark', {
            font: '3D-ASCII',
        })));
    })
    .action(async (type, options) => {
        switch (type) {
            case ATOM:
            case MOLECULE:
            case ORGANISM:
            case PAGE:
            case TEMPLATE: {
                const answers = await getComponentInquirer(inquirer, options);
                generateComponent({ type, ...answers });
                break;
            }
            case UTIL: {
                const answers = await getUtilInquirer(inquirer, options);
                generateUtil(answers);
                break;
            }
            case INTL: {
                const answers = await getIntlInquirer(inquirer, options);
                generateIntl(answers);
                break;
            }
            default:
                break;
        }

        // console.log(JSON.stringify(answers, null, 2));
    });

program.parse(process.argv);
