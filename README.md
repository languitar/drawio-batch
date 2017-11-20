# drawio-batch

[![Build Status](https://travis-ci.org/languitar/drawio-batch.svg?branch=master)](https://travis-ci.org/languitar/drawio-batch)

A command line converter for [draw.io] documents.
Converts diagrams to common image formats by wrapping the existing online conversion code into an offline tool.

## Dependencies

### Build requirements

* Python 3 with setuptools

### Runtime requirements

* [PhantomJS](http://phantomjs.org/)

## Building

```bash
python3 setup.py install # with required arguments depending on your setup
```

This will install a `drawio-batch` script.

There is also an [Archlinux AUR package](https://aur.archlinux.org/packages/drawio-batch/) for this project.

[draw.io]: https://www.draw.io/
