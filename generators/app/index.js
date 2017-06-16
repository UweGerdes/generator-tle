'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('modulename', {type: String, required: false});
  }

  initializing() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ' + chalk.yellow('generator-ez54') + ' generator!'
    ));
  }

  prompting() {
    const prompts = [{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname // Default to current folder name
    }, {
      type: 'input',
      name: 'module',
      message: 'New module name',
      default: this.options.modulename // Default to first argument
    }, {
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.<name>;
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath(path.join('docs', this.props.module + '.txt'))
    );
  }

  install() {
    //    This.installDependencies();
    this.log(chalk.red('not installing generator-ez54 generator!'));
  }

  end() {
    this.log(yosay(
      'finished generating ' + chalk.green('generator-ez54') + '.'
    ));
  }
};
