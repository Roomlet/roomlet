'use strict'
// load env
require('dotenv').config()
// assert env
require('./src/lib/assert-env.js')
// start server
require('babel-register')
require('./src/main.js')
