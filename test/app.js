'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

var testPackageName = 'testPackage';
var testPythonVersion = '2.7.9';
var testUsername = 'testUserName';
var testPackageDescription = 'This is a test package';
var testLicense = 'MIT';

describe('generator-pypi-master:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        packageName: testPackageName,
        pythonVersion: testPythonVersion,
        username: testUsername,
        packageDescription: testPackageDescription,
        license: testLicense
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'CHANGELOG.md',
      'MANIFEST.in',
      'README.md',
      'requirements.txt',
      'setup.py',
      'setup.sh',
      'LICENSE'
    ]);
  });
});

describe('generator-pypi-master:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        packageName: testPackageName,
        pythonVersion: testPythonVersion,
        username: testUsername,
        packageDescription: testPackageDescription,
        license: null
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'CHANGELOG.md',
      'MANIFEST.in',
      'README.md',
      'requirements.txt',
      'setup.py',
      'setup.sh'
    ]);
  });

  it('does not create files', function () {
    assert.noFile([
      'LICENSE'
    ]);
  });
});
