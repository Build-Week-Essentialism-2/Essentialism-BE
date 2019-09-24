const db = require('../db/db-config'); 

module.exports = {
    updateValue
}

function updateValue(body) {
    return db('values').where({ value }).update({ priority })
}