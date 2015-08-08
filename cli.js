#!/usr/bin/env node
'use strict';
var meow = require('meow');
var ornstein = require('./');

var cli = meow({
  help: [
    'Usage',
    '  ornstein <input>',
    '',
    'Example',
    '  ornstein Unicorn'
  ].join('\n')
});

ornstein(cli.input[0]);
