const db = require('../db/db-config'); 

module.exports = {
    addTask,
    delTask, 
    delAllTasks,
    getTasks
}

function addTask(body) {
    return db('tasks').insert(body); 
}

function getTasks() {
    return db('tasks'); 
}

function delTask(taskName) {
    return db('tasks').where(taskName); 
}

function delAllTasks() { 
    return db('tasks').del(); 
}