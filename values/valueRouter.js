// setting up router 
const router = require('express').Router(); 

// model imports 
const Values = require('./value-model'); 


// ============ PUT Requests ==============
router.put('/', (req, res) => {
    const body = req.body; 

    Values.updateValue(body)
        .then(val => {
            res.status(204).json({ message: `Value updated successfully!`, value: `${val}` })
        })
        .catch(err => {
            res.status(500).json({ message: `There was an error on our end.  Try again later.`, error: `${err}`})
        })
})

// export
module.exports = router; 