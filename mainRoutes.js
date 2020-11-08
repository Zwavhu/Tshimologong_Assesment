'use strict'

const path = require('path')
const express = require('express')
const mainRouter =express.Router()

mainRouter.get('/', function (req, res){
    res.sendFile(path.join(__dirname, 'views', 'welcome.html'))
})

mainRouter.get('/survey', function (req, res){
    res.sendFile(path.join(__dirname, 'views', 'survey.html'))
})

mainRouter.get('/results', function (req, res){
    res.sendFile(path.join(__dirname, 'views', 'results.html'))
})

module.exports = mainRouter