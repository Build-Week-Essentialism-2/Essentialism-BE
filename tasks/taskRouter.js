const router = ('express').Router(); 

// model imports 
const Tasks = require('./task-model'); 

// get tasks
router.get('/', (req, res) => {

    Tasks.getTasks()
        .then(task => {
            res.status(200).json({ message: `Success`, task })
        })
        .catch(err => {
            res.status(500).json({ message: `There was an error on our end`, err })
        })
})

// add task
router.post('/', (req, res) => {
    const body = req.body; 

    Tasks.addTask(body)
        .then(task => {
            res.status(201).json({ message: `Task created successfully!`, task })
        })
        .catch(err => {
            res.status(500).json({ message: `There was an error on our end.`, err })
        })
})

// delete task
router.delete('/', (req, res) => {
    const { taskName } = req.body

    Tasks.delTask({ taskname })
        .first()
        .then(task => {
            res.status(410).json({ message: `Task deleted successfully.`, task })
        })
        .catch(err => {
            res.status(500).json({ message: `There was a problem on our end.`, err })
        })
})

// delete ALL TASKS
router.delete('/', (req, res) => {
    
    Tasks.delAllTasks()
        .then(task => {
            res.status(410).json({ message: `All tasks deleted.  That was brave of you.`, task })
        })
        .catch(err => {
            res.status(500).json({ message: `Unable to delete tasks.  Try again later!`, err })
        })
})

module.exports = router; 