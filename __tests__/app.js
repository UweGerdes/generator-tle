'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-tle:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({module: 'test-module'})
      .withPrompts({description: 'Short description for test-module'});
  });

  it('creates files', () => {
    assert.file([
      'DesignBundle/docs/test-module.md',
      'DesignBundle/Resources/stylesheets/test-module.less',
      'DesignBundle/Resources/variables/test-module.less',
      'DesignBundle/Resources/views/test-module.html.twig',
      'DesignBundle/Resources/javascript/test-module.js'
    ]);
  });
});

describe('generator-tle:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({module: 'test-nojs'})
      .withPrompts({description: 'Short description for test-nojs'})
      .withPrompts({generateJavaScript: false});
  });

  it('creates files without js file', () => {
    assert.file([
      'DesignBundle/docs/test-nojs.md',
      'DesignBundle/Resources/stylesheets/test-nojs.less',
      'DesignBundle/Resources/variables/test-nojs.less',
      'DesignBundle/Resources/views/test-nojs.html.twig'
    ]);
    assert.noFile([
      'DesignBundle/Resources/javascript/test-nojs.js'
    ]);
  });
});
