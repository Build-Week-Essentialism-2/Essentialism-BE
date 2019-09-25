const db = require('../db/db-config'); 

module.exports = {
    addTask,
    delTask, 
    delAllTasks,
    getAllTasks, 
    getTask
}

function addTask(taskArr) {
    taskArr.forEach(task => {
        return db('tasks').insert(task, 'id'); 
    })
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