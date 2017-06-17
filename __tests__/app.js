'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-tle:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({module: 'test-module'})
      .withPrompts({description: 'Short description for test-module'})
      .withPrompts({generateJavaScript: true});
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
