'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

var testPackageName = 'testPackage';
var testPythonVersion = '2.7.9';
var testUsername = 'testUserName';
var testPackageDescription = 'This is a test package';

describe('generator-pypi-master:with-MIT', function () {
  this.timeout(10000);

  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        packageName: testPackageName,
        pythonVersion: testPythonVersion,
        username: testUsername,
        packageDescription: testPackageDescription,
        license: 'MIT'
      })
      .toPromise();
  });

  it('creates files', function (done) {
    assert.file([
      'CHANGELOG.md',
      'MANIFEST.in',
      'README.md',
      'requirements.txt',
      'setup.py',
      'setup.sh',
      'LICENSE',
      'tests/__init__.py',
      testPackageName + '/__init__.py'
    ]);
    done();
  });
});

describe('generator-pypi-master:with-MIT', function () {
  this.timeout(10000);

  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        packageName: testPackageName,
        pythonVersion: testPythonVersion,
        username: testUsername,
        packageDescription: testPackageDescription,
        license: 'ApacheV2'
      })
      .toPromise();
  });

  it('creates files', function (done) {
    assert.file([
      'CHANGELOG.md',
      'MANIFEST.in',
      'README.md',
      'requirements.txt',
      'setup.py',
      'setup.sh',
      'LICENSE',
      'tests/__init__.py',
      testPackageName + '/__init__.py'
    ]);
    done();
  });
});

describe('generator-pypi-master:no-license', function () {
  this.timeout(10000);

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

  it('creates files', function (done) {
    assert.file([
      'CHANGELOG.md',
      'MANIFEST.in',
      'README.md',
      'requirements.txt',
      'setup.py',
      'setup.sh',
      'tests/__init__.py',
      testPackageName + '/__init__.py'
    ]);
    done();
  });

  it('does not create files', function (done) {
    assert.noFile([
      'LICENSE'
    ]);
    done();
  });
});
