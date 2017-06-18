[![Build Status](https://travis-ci.org/UweGerdes/generator-tle.svg?branch=master)](https://travis-ci.org/UweGerdes/generator-tle)

# Yeoman generator Twig Less ES6

## Installation

Make shure you have Node.js installed.

Install Yeoman and some tools globally (perhaps you need `sudo`):

```bash
$ npm install -g yo eslint nsp jest-cli
```

Clone the git and install dependencies:

```bash
$ git clone https://github.com/UweGerdes/generator-tle.git
$ npm install
```

TODO: perhaps `npm link` will do a better yob.

## Use with Dockerfile uwegerdes/yeoman

If using from a Docker container be sure to have this generator in /home/node/src and the target directory in /home/node/app. The node_modules are in /home/node, more dependencies should be installed there.
