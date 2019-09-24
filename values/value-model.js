const db = require('../db/db-config'); 

module.exports = {
    addValue
}

function addValue(body) {
    return db('values').insert(body); 
}