# DEPRECATED

[Drawio desktop](https://github.com/jgraph/drawio-desktop) now ships with a command line mode that provides the complete functionality of dawio-batch. I will not continue to develop on this piece of software.

# drawio-batch

[![Build Status](https://travis-ci.org/languitar/drawio-batch.svg?branch=master)](https://travis-ci.org/languitar/drawio-batch)

A command line converter for [draw.io] documents.
Converts diagrams to common image formats by wrapping the existing online conversion code into an offline tool.

## Attention

Starting with version 8.5.3, `drawio-batch` has been rewritten as a JavaScript application based on [puppeteer] instead of the unmaintained phantomjs.
Thus, packaging has changed and phantomjs is not required anymore.

## Dependencies

* [node.js](https://nodejs.org)
* [commanders.js](https://github.com/tj/commander.js/)
* [puppeteer](https://github.com/GoogleChrome/puppeteer)

## Installing

```
npm -g install
```

This will install a `drawio-batch` script.

There is also an [Archlinux AUR package](https://aur.archlinux.org/packages/drawio-batch/) for this project.

[draw.io]: https://www.draw.io/
[puppeteer]: https://github.com/GoogleChrome/puppeteer
