const router = require('express').Router();

// security 
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); 
const secrets = require('../config/secrets');   

// model imports 
const Users = require('./auth-model'); 

// login
router.post('/login', (req, res) => {
    const { username, password } = req.body; 

    Users.findUser({ username })
        .first()
        .then(user => {
            const token = generateToken(user); 

            res.status(200).json({ message: `Welcome, ${user.username}!`, token }); 
        })
        .catch(err => {
            const statCode = 500; 

            res.status(statCode).json({ message: `Error message ${statCode} with the error message ${err}`})
        })
})

// register
router.post('/register', (req, res) => {
    const body = req.body; 

    Users.addUser(body)
        .then(user => {
            res.status(201).json({ message: `User created.  Welcome, ${body.username}!`})
        })
        .catch(err => {
            const statCode = 500;

            res.status(statCode).json({ message: `Error message ${statCode} with the error message ${err}`})
        })
})

// delete user 
router.delete('/delete', (req, res) => {
    const { username, password } = req.body; 

    Users.deleteUser({ username })
        .then(user => {
            res.status(410).json({ message: `Account deleted successfully.  We're sorry to see you go!`})
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