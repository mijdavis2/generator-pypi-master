from setuptools import setup


def readme():
    with open('README.md') as f:
        return f.read()

setup(
    name=<%= packageName %>,
    version='0.1',
    description=<%= packageDescription %>,
    long_description=readme(),
    classifiers=[
        'Development Status :: 3 - Alpha',
        'Programming Language :: Python',
        'Programming Language :: Python :: <%= reqMajor %>',
        'Programming Language :: Python :: <%= reqMajor %>.<%= reqMinor %>',
        'Topic :: Software Development :: Libraries :: Python Modules'
    ],
    url='http://github.com/<%= username %>/<%= packageName %>',
    author='<%= username %>',
    # author_email='<%= username %>@gmail.com',
    license=<%= license %>,
    packages=['<%= packageName %>'],
    install_requires=[
        'markdown',
    ],
    include_package_data=True,
    zip_safe=False
)
