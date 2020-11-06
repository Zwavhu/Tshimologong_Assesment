'use strict'

const express = require('express')
const app = express()
const appConstants = require('./appConstants')

const mainRouter =  require('./mainRoutes.js')

app.use('/', mainRouter)

app.listen(appConstants.APP_PORT)
console.log(`Server listening on port:  ${appConstants.APP_PORT}`)