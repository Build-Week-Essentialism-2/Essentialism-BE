const bcrypt = require('bcryptjs'); 
const Users = require('../auth/auth-model'); 

module.exports = function checkPass(req, res, next) {
    const { username, password } = req.body; 
    Users.findUser({ username })
        .first()
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                next(); 
            } else {
                res.status(401).json({ message: `Invalid credentials.  Please enter correct credentials.`})
            }
        })
        .catch(err => {
            res.status(500).json({ message: `There was a problem on our end.`, err })
        })
    
}