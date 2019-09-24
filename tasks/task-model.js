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
    return db('tasks').where(id); 
}

function getAllTasks() {
    return db('tasks'); 
}

function delTask(id) {
    return db('tasks').where(id); 
}

function delAllTasks() { 
    return db('tasks').del(); 
}