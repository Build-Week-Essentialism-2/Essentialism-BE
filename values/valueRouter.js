// setting up router 
const router = require('express').Router(); 

// model imports 
const Values = require('./value-model'); 

// ============ GET Requests ==============

// get all values 
router.get('/', (req, res) => {
    const user_id = req.headers.user_id
    
    Values.getValues({ user_id })
        .then(val => {
            val.map(value => {
                if(value.priority === 1) {
                    return value.priority = true; 
                } else if (value.priority === 0) {
                    return value.priority = false; 
                } else {
                    return value; 
                }
            })
            res.status(200).json(val); 
        })
        .catch(err => {
            res.status(500).json({ message: `${err}` }); 
        })
})

// get top 10 values
router.get('/top10', (req, res) => {
    const user_id = req.headers.user_id 
    // console.log({ user_id })
    Values.getIndiff({ user_id })
        .then(val => {
            val.map(value => {
                if(value.priority === 1) {
                    return value.priority = true; 
                } else if (value.priority === 0){
                    return value.priority = false; 
                } else {
                    return value; 
                }
            })
            res.status(200).json(val); 
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

// get top 3 values 
router.get('/top3', (req, res) => {
    const user_id = req.headers.user_id  

    Values.getImportant({ user_id })
        .then(val => {
            val.map(value => {
                if(value.priority === 1) {
                    return value.priority = true; 
                } else if (value.priority === 0){
                    return value.priority = false; 
                } else {
                    return value; 
                }
            })
            res.status(200).json(val); 
        })
        .catch(err => {
            res.status(500).json(err); 
        })
})

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

