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

router.post('/notesa', (req,res) => {
    //const note = req.body;    

    const notesArr =  readFileAsync('./db/db.json', "utf8").then(note => {
        console.log(note)
        let parsedNotes;

        parsedNotes=JSON.parse(note);
        res.json(parsedNotes)

        newNotes = req.body;
        console.log(newNotes);

        parsedNotes.push(newNotes);
        
        //console.log(parsedNotes.stringify())

        console.log(JSON.parse(parsedNotes.toString()))

        //writeFileAsync('./db/db.json', parsedNotes.toString())

    })
    // .then(data => {
    //     console.log(data);
    //     newNotes = req.body;
    //     console.log(newNotes);
    //     // return writeFileAsync('./db/db.json', newNotes);
    //     // return writeFileAsync('./db/db.json', data).then(notes => {

    //     // })
    // })

    //console.log(notesArr);



    //console.log(notesArr)

    // return writeFileAsync('./db/db.json', noteArr).then(note => {
    //     console.log('here')

    //     .then( notes => {
        
    //     //console.log(note)
    //         let parsedNotes;

    //     // parsedNotes = [].concat(JSON.parse(note));
    //     parsedNotes=JSON.parse(note);
    //         console.log(parsedNotes)
    //     res.json(parsedNotes)
    // })
})
// })


module.exports = router;