[![Build status][travis-image]][travis-url] 
[![Coverage percentage][coveralls-image]][coveralls-url]

# <%= packageName %>

<%= packageDescription %>

## Requirements

- Python <%= reqMajor %>.<%= reqMinor %>.<%= reqPatch %>+

## Install

```
pip install git@github.com:<%= username %>/<%= packageName %>.git#egg=<%= packageName %>
```

## Develop

This package comes with a setup.sh script which swiftly
creates a virtualenv and installs dependencies from requirements.txt
without the hassle of virtualenv wrapper:

```
. ./setup.sh -p python<%= reqMajor %>.<%= reqMinor %>.<%= reqPatch %>
```

## Test

```
py.test -v -s --cov-report term-missing --cov=<%= packageName %> -r w tests
```

## License

[<%= license %>](LICENSE) <%= year %> <%= username %>

[travis-image]: https://travis-ci.org/<%= username %>/<%= packageName %>.svg?branch=master
[travis-url]: https://travis-ci.org/<%= username %>/<%= packageName %>
[coveralls-image]: https://coveralls.io/repos/<%= username %>/<%= packageName %>/badge.svg
[coveralls-url]: https://coveralls.io/r/<%= username %>/<%= packageName %>
