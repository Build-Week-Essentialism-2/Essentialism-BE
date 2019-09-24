// setting up router 
const router = require('express').Router(); 

// model imports 
const Values = require('./value-model'); 


// ============ POST Requests ==============
router.post('/', (req, res) => {
    const body = req.body; 

    Values.addValue(body)
        .then(val => {
            res.status(204).json({ message: `Value updated successfully!`, value: `${val}` })
        })
        .catch(err => {
            res.status(500).json({ message: `There was an error on our end.  Try again later.`, error: `${err}`})
        })
})

// export
module.exports = router; 




//make a GET request 

// shaped shape 
// const value =   
// {
//                 value: "relationships",
//                 priority: false,
//                 user_id: localStorage.getItem('user_id')
//                 }

// const {value, setValue} = useState()

// setValue(
// {
//     ...value, 
//     priority: null, 
//     user_id: localStorage.getItem('user_id')
// })

