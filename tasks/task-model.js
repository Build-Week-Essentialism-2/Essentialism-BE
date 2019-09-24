const db = require('../db/db-config'); 

module.exports = {
    addTask,
    removeTask, 
    delAllTasks
}

function addTask(body) {
    return db('tasks').insert(body); 
}

function removeTask(task) {
    return db('tasks').where(task); 
}

function delAllTasks() {
    return db('tasks').del(); 
}