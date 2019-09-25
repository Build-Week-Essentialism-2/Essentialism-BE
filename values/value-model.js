const db = require('../db/db-config'); 

module.exports = {
    addValues,
    getIndiff,
    getImportant,
    getValues
}

function addValues(body) {

    // do map here of array that frontend sends (which will be saved to state once they GET all the default values)
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