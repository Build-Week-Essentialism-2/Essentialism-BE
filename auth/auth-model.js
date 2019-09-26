const db = require('../db/db-config'); 

// exports 
module.exports = {
    addUser,
    findUser,
    deleteUser
}

// adds a User, returns the ID of that new user. 
function addUser(body) {
    return db('auth').insert(body, 'id'); 
}

// finds a user based on the username 
function findUser(user) {
    return db('auth').where(user); 
}

// deletes a user based on the username
function deleteUser(user) {
    return db('auth').where(user).del(); 
}

