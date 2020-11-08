'use strict'

const db = require('./database/db.js')

function addParticipantInfo(Surname, FirstNames, Number, Age) {
    console.log(Surname, FirstNames, Number, Age)
    db.pools
        .then(pool => {
            let currentDate = new Date()
            const insertQueryResults = pool.request()
            .query(`INSERT INTO participants_details(ParticipantID, Surname, FirtNames, Number, Age, myDate ) VALUES ('${Surname}',
            '${FirstNames}', '${Number}', '${Age}', '${currentDate.toLocaleDateString()}'); SELECT SCOPE_IDENTITY() AS 'Identity'`)
            return insertQueryResults
        })
        .catch(err => {
            console.log(err)
        }).catch(err => {
            console.log(err)
    })
}

module.exports
{
    addParticipant :addParticipantInfo

}