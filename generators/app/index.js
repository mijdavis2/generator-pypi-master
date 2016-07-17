'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  _defaultYear: function() {
    return (new Date).getFullYear();
  },
  constructor: function () {
    yeoman.Base.apply(this, arguments);
    this.log(yosay(
        chalk.red('Welcome!') + '\n' +
        chalk.yellow('You\'re using the definitive generator for scaffolding a pypi package!')
    ));
  },
  prompting: function () {
    return this.prompt([{
      type    : 'input',
      name    : 'packageName',
      message : 'Your project name: ',
      default : this.appname // Default to current folder name
      },
      {
        type    : 'input',
        name    : 'packageDescription',
        message : 'A description of your package: '
      },
      {
        type    : 'input',
        name    : 'username',
        message : 'Your github username: '
      },
      {
      type    : 'list',
      name    : 'pythonVersion',
      message : 'What minimum python version will you support?',
      choices : [
        {
          "value": ["2","7","9"],
          "name": "2.7.9"
        },
        {
          "value": ["2","7","10"],
          "name": "2.7.10"
        },
        {
          "value": ["2","7","11"],
          "name": "2.7.11"
        },
        {
          "value": ["3","4","3"],
          "name": "3.4.3"
        },
        {
          "value": ["3","5","1"],
          "name": "3.5.1"
        }
      ]
      },
      {
        name: 'license',
        message: 'Select license:',
        type: 'list',
        choices : [
          {
            "value": "MIT",
            "name": "MIT"
          },
          {
            "value": "ApacheV2",
            "name": "Apache v2"
          },
          {
            "value": null,
            "name": "None"
          }
        ]
      }
    ]).then(function (answers) {
      this.log('package name', answers.packageName);
      this.log('python version', answers.pythonVersion);
      this.answers = answers
    }.bind(this));
  },

  writing: function () {
    this.fs.copyTpl(
      this.templatePath('*'),
      this.destinationRoot(),
      {
        packageName: this.answers.packageName,
        reqMajor: this.answers.pythonVersion[0],
        reqMinor: this.answers.pythonVersion[1],
        reqPatch: this.answers.pythonVersion[2],
        username: this.answers.username,
        packageDescription: this.answers.packageDescription,
        license: this.answers.license,
        year: this._defaultYear()
      }
    );
    this.fs.copyTpl(
      this.templatePath('package/*'),
      this.destinationPath('package/'),
      {
        packageName: this.answers.packageName
      }
    );
    this.fs.copyTpl(
      this.templatePath('dotfiles/dot_gitignore'),
      this.destinationPath('.gitignore')
    );
    if ( this.answers.license ) {
      this.fs.copyTpl(
        this.templatePath('licenses/' + this.answers.license),
        this.destinationPath('LICENSE'),
        {
          year: this._defaultYear(),
          name: this.answers.username
        }
      )
    }
  },

  install: function () {
    //this.installDependencies();
  }
});
