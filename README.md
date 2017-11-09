# drawio-batch

[![Build Status](https://travis-ci.org/languitar/drawio-batch.svg?branch=master)](https://travis-ci.org/languitar/drawio-batch)

A command line converter for [draw.io] documents.
Converts diagrams to common image formats by wrapping the existing online conversion code into an offline tool.

## Dependencies

### Build requirements

* Python 3 with setuptools
* [html-inline](https://github.com/substack/html-inline)

### Runtime requirements

* [PhantomJS](http://phantomjs.org/)

## Building

Ensure that [html-inline] is on the `PATH`.

```
./prepare.sh
python3 setup.py install # with required arguments depending on your setup
```

This will install a `drawio-batch` script.


[draw.io]: https://www.draw.io/
[html-inline]: https://github.com/substack/html-inline
