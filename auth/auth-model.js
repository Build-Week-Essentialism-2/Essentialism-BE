const db = require('../db/db-config'); 

module.exports = {
    addUser,
    findUser,
    deleteUser
}

function addUser(body) {
    return db('auth').insert(body, 'id'); 
}

function findUser(user) {
    return db('auth').where(user); 
}

function deleteUser(user) {
    return db('auth').where(user).del(); 
}

