const db = require('../db/db-config'); 

module.exports = {
    addValue,
    getIndiff,
    getImportant,
    getValues
}

function addValue(body) {
    return db('values').insert(body, 'id'); 
}

function getValues(user_id) {
    return db('values').where(user_id); 
}

function getIndiff(user_id) {
    console.log(user_id); 
    return db('values').where({ priority: null }).andWhere(user_id); 
}

function getImportant(user_id) {
    console.log(user_id); 
    return db('values').where({ priority: true }).andWhere(user_id); 
}