// library imports
const express = require('express'); 
const helmet = require('helmet'); 
const cors = require('cors');

//server creation
const server = express();  

// middleware instantiation
server.use(express.json()); 
server.use(cors({
  origin: '*'  // remedies CORS origin errors the frontend 
})); 
server.use(helmet()); // hides "Powered By Express" is the header

// router file imports 
const authRouter = require('../auth/authRouter'); 
const valueRouter = require('../values/valueRouter'); 
const taskRouter = require('../tasks/taskRouter');

// setting up routing
server.use('/auth/', authRouter); 
server.use('/api/values', valueRouter); 
server.use('/api/tasks', taskRouter); 

module.exports = server; 