const router = require('express').Router();

// security 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const secrets = require('../config/secrets');   

// model imports 
const Users = require('./auth-model'); 

// middleware imports 
const passCheck = require('../middleware/login-middleware'); 


// login
router.post('/login', passCheck, (req, res) => {
    const { username, password } = req.body; 

    // const token = generateToken(user); 

    // res.status(200).json({ message: `Welcome, ${user.username}!`, token })

    Users.findUser({ username })
        .first()
        .then(user => {
            const token = generateToken(user); 

            res.status(200).json({ message: `Welcome, ${user.username}!`, token: `${token}`, user_id: user.id }); 
        })
        .catch(err => {
            const statCode = 500; 

            res.status(statCode).json(error)
        })
})

// register
router.post('/register', (req, res) => {
    const body = req.body; 

    const hash = bcrypt.hashSync(body.password, 12); 

    body.password = hash; 

    Users.addUser(body)
        .then(user => {
            res.status(201).json({ message: `User created.  Welcome, ${body.username}!`})
        })
        .catch(err => {
            const statCode = 500;

            res.status(statCode).json({ error: `${err}` })
        })
})

// delete user 
router.delete('/delete', (req, res) => {
    const { username, password } = req.body; 

    Users.deleteUser({ username })
        .then(user => {
            res.status(410).json({ message: `Account deleted successfully.  We're sorry to see you go!`})
        })
        .catch(err => {
            res.status(500).json({ message: `Account couldn't be deleted at this time.  Our bad.  Try again later!`, err })
        })
})

// generate json web token function
function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }

    const options = {
        expiresIn: '24h'
    }

    return jwt.sign(payload, secrets.jwtSecret, options)
}

module.exports = router; 