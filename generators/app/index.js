'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

var config = {
  dir: {
    docs: 'docs',
    views: 'DesktopBundle/Resources/views',
    stylesheets: 'AssetsBundle/Resources/stylesheets',
    javascript: 'AssetsBundle/Resources/javascript'
  }
};

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
      name: 'module',
      message: 'New module name',
      default: this.options.modulename // Default to first argument
    }, {
      type: 'input',
      name: 'description',
      message: 'Short description',
      default: 'Awful new ' + this.options.modulename
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

    this.fs.copyTpl(
      this.templatePath('doc.md'),
      this.destinationPath(path.join(config.dir.docs, this.props.module + '.md')),
      {
        modulename: this.props.module,
        description: this.props.description,
        props: this.props
      }
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
