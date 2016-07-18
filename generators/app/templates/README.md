# <%= packageName %>

A pypi package.

## Requirements

- Python <%= reqMajor %>.<%= reqMinor %>,<%= reqPatch %>

## Install

```
pip install git@github.com:<%= username %>/<%= packageName %>.git#egg=<%= packageName %>
```

## Develop

This package comes with [mijdavis2's](httpe://github.com/mijdavis2) setup.sh script which swiftly
creates a virtualenv without the hassle of virtualenv wrapper:

```
. ./setup.sh -p python<%= reqMajor %>.<%= reqMinor %>,<%= reqPatch %>
```

## Test

```
py.test -v -s --cov-report term-missing --cov=<%= packageName %> -r w tests
```

## License

[<%= license %>](LICENSE) <%= year %> <%= username %>

