#!/usr/bin/env node
const program = require('commander');
const pkg = require('../package.json');

program
  .version(pkg.version, '-v, --version')
  .command('init [name]', 'generate a new component library config')
  .parse(process.argv);