'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-tlj:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({module: 'test-module'})
      .withPrompts({description: 'Short description for test-module'})
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'docs/test-module.md',
      'AssetsBundle/Resources/stylesheets/test-module.less',
      'AssetsBundle/Resources/variables/test-module.less',
      'DesignBundle/Resources/views/test-module.html.twig',
      'AssetsBundle/Resources/javascript/test-module.js'
    ]);
  });
});
