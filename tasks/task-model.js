const db = require('../db/db-config'); 

module.exports = {
    addTask,
    delTask, 
    delAllTasks,
    getAllTasks, 
    getTask
}


function addTask(taskArr) {
    return db('tasks').insert(taskArr, 'id'); 
}

function getTask(user_id) {
    console.log({user_id}); 
    return db('tasks').where({ user_id }); 
}

function getAllTasks() {
    return db('tasks'); 
}

function delTask(id) {
    return db('tasks').where(id).del(); 
}

function delAllTasks() { 
    return db('tasks').del(); 
}