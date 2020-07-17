import program from 'commander';
import chalk from 'chalk';
import { VERSION } from './utils/constants';
import apply from './index';

const actionMap = {
  init: {
    alias: 'ini',
    description: 'generate a new project from a template',
    usages: ['oli init templateName projectName'],
  },
  config: {
    alias: 'cfg',
    description: 'config .olisrc',
    usages: [
      'oli config set <k> <v>',
      'oli config get <k>',
      'oli config remove <k>',
    ],
  },
};

// 添加init/ config 命令
Object.keys(actionMap).forEach((action) => {
  const actionContent = actionMap[action];
  program
    .command(action)
    .description(actionContent.description)
    .alias(actionContent.alias)
    .action(() => {
      switch (action) {
        case 'config':
          apply(action, ...process.argv.slice(3));
          break;
        case 'init':
          apply(action, ...process.argv.slice(3));
          break;
        default:
          break;
      }
    });
});

function help() {
  console.log('\r\nUsage:');
  Object.keys(actionMap).forEach((action) => {
    const actionContent = actionMap[action];
    if (actionContent.usages) {
      actionContent.usages.forEach((usage) => console.log(` -${usage}`));
    }
  });
  console.log('\r');
}

function textGreen(text) {
  return chalk.green(text);
}

program.usage('<command> [options]');
// oli -h
program.on('-h', help);
program.on('--help', help);
program.version(VERSION, '-V --version').parse(process.argv);

// 只输入oli 没输入参数
if (!process.argv.slice(2).length) {
  program.outputHelp(textGreen);
}
