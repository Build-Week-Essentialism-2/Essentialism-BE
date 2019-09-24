// set up router
const router = ('express').Router(); 

// model imports 
const Tasks = require('./task-model'); 

// middleware imports 
const restricted = require('../middleware/restricted-middleware'); 


// ================ GET Requests =================
// get tasks
router.get('/', restricted, (req, res) => {

    Tasks.getAllTasks()
        .then(task => {
            res.status(200).json({ message: `Success`, task })
        })
        .catch(err => {
            res.status(500).json({ message: `There was an error on our end`, err })
        })
})

// get specific task
router.get('/:id', restricted, (req, res) => {
    const id = req.params; 

    Tasks.getTask({ id })
        .first()
        .then(task => {
            res.status(410).json({ message: `Task deleted successfully.`, task })
        })
        .catch(err => {
            res.status(500).json({ message: `There was a problem on our end.  Please try again later.`, err })
        })
})

// =========== POST Requests ============

// add task
router.post('/', restricted, (req, res) => {
    const body = req.body; 

    Tasks.addTask(body)
        .then(task => {
            res.status(201).json({ message: `Task created successfully!`, task })
        })
        .catch(err => {
            res.status(500).json({ message: `There was an error on our end.`, err })
        })
})

// =========== DELETE Requests ============

// delete task
router.delete('/:id', restricted, (req, res) => {
    const id = req.params

    Tasks.delTask({ id })
        .first()
        .then(task => {
            res.status(410).json({ message: `Task deleted successfully.`, task })
        })
        .catch(err => {
            res.status(500).json({ message: `There was a problem on our end.`, err })
        })
})

// delete ALL TASKS
router.delete('/', restricted, (req, res) => {
    
    Tasks.delAllTasks()
        .then(task => {
            res.status(410).json({ message: `All tasks deleted.  That was brave of you.`, task })
        })
        .catch(err => {
            res.status(500).json({ message: `Unable to delete tasks.  Try again later!`, err })
        })
})

module.exports = router; 