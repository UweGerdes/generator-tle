'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const path = require('path');

var config = {
  dir: {
    docs: 'DesignBundle/docs',
    views: 'DesignBundle/Resources/views',
    stylesheets: 'DesignBundle/Resources/stylesheets',
    variables: 'DesignBundle/Resources/variables',
    javascript: 'DesignBundle/Resources/javascript'
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
      'Welcome to the ' + chalk.yellow('generator-tle') + ' generator!'
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
      name: 'generateJavaScript',
      message: 'Would you like to generate the .js file?',
      default: true
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.<name>;
      this.props = props;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('doc.md'),
      this.destinationPath(path.join(config.dir.docs, this.props.module + '.md')),
      {
        props: this.props
      }
    );
    this.fs.copyTpl(
      this.templatePath('view.html.twig'),
      this.destinationPath(path.join(config.dir.views, this.props.module + '.html.twig')),
      {
        props: this.props
      }
    );
    this.fs.copyTpl(
      this.templatePath('stylesheet.less'),
      this.destinationPath(path.join(config.dir.stylesheets, this.props.module + '.less')),
      {
        props: this.props
      }
    );
    this.fs.copyTpl(
      this.templatePath('variables.less'),
      this.destinationPath(path.join(config.dir.variables, this.props.module + '.less')),
      {
        props: this.props
      }
    );
    if (this.props.generateJavaScript) {
      this.fs.copyTpl(
        this.templatePath('es6.js'),
        this.destinationPath(path.join(config.dir.javascript, this.props.module + '.js')),
        {
          props: this.props
        }
      );
    }
  }

  install() {
    // This.installDependencies();
    // this.log(chalk.red('installing generator-tle generator!'));
  }

  end() {
    this.log(yosay(
      'finished generating ' + chalk.green('generator-tle') + '.'
    ));
  }
};
