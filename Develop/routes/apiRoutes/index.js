const path = require('path');
const router = require('express').Router();

const { notes } = require('../../db/db.json')

router.get('/api/notes', (req, res) => {
    let results = notes;
    if(req.query) {
        notes = filterByQuery(req.query, results)
    }
    res.json(results)
});

module.exports = router;