const { json } = require('express');
const fs = require('fs');
const router = require('express').Router();
//const { dbnotes } = require('./db/db.json');
const util = require('util');
const readFileAsync=util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

router.get('/notes', (req, res) => {

        return readFileAsync('./db/db.json', "utf8").then(note => {
        
        //console.log(note)
            let parsedNotes;

        // parsedNotes = [].concat(JSON.parse(note));
        parsedNotes=JSON.parse(note);
            console.log(parsedNotes)
        res.json(parsedNotes)
    })

});

// router.post('/notes', (req,res) => {
//     const note = body;

//     return writeFileAsync('../Develop/db/db.json', note)
// })

module.exports = router;