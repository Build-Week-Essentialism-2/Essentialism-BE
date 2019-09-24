const db = require('../db/db-config'); 

module.exports = {
    addTask,
    delTask, 
    delAllTasks,
    getAllTasks, 
    getTask
}

function addTask(body) {
    return db('tasks').insert(body); 
}

function getTask(id) {
    // console.log(id); 
    return db('tasks').where(id); 
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