const { json } = require('express');
const fs = require('fs');
const { parse } = require('path');
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

router.post('/notes', (req,res) => {
    // pull existing data from db.json file
        readFileAsync('./db/db.json', "utf8").then(note => {     
        let parsedNotes;

        parsedNotes=JSON.parse(note);
        res.json(parsedNotes)

        // set user entry values to variable
        newNotes = req.body;
        // newNotes="id:"+arrLength+newNotes
        // console.log(newNotes)
        
        // add new values to existing notes array
        parsedNotes.push(newNotes);
        // add id to each note
        parsedNotes.forEach((item, i) => {
            item.id = i+1;
        });
        console.log(parsedNotes)

        parsedNotes=JSON.stringify(parsedNotes);
        // add items to db.json file
        writeFileAsync('./db/db.json', parsedNotes)
        
    })
})


router.delete("/delete", (req,res) => {
    
})


module.exports = router;