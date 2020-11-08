'use strict'

const express = require('express')
const path = require('path')
const surveyRouter = express.Router()
const storeParticipant = require('../dbAccess.js')

// direct user to results once completed
surveyRouter.get('/results', function (req, res) {
    res.sendFile(path.join(__dirname, '../views', 'results.html'))
})

// adding survey inputs to database

surveyRouter.post('/api/addParticipantInfo', function (req, res){
    console.log('Adding Participant Details to database')

    try {
        storeParticipant.addParticipantInfo(req.body.surname, req.body.firstname, req.body.number, req.body.age)
        res.redirect('/survey')
    } catch (err){
        console.log('Failed to add participant deetails to database', err)
    }
})

module.exports = surveyRouter