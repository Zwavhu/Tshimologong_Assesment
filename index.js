'use strict'

const express = require('express')
const app = express()
const appConstants = require('./appConstants')

const mainRouter =  require('./mainRoutes.js')

app.use('/', mainRouter)
app.use('/cdn', express.static('public'))

// serving static files
app.use('/cdn', express.static('public'))

app.listen(appConstants.APP_PORT)
console.log(`Server listening on port:  ${appConstants.APP_PORT}`)