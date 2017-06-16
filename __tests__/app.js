'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-ez-54:app', () => {
  beforeAll(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({module: 'test-module'})
      .withPrompts({description: 'Short description for test-module'})
      .withPrompts({someAnswer: true});
  });

  it('creates files', () => {
    assert.file([
      'docs/test-module.md'
    ]);
  });
});
