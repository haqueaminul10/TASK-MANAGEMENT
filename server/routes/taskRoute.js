const express =require(`express`);


//ROUTER
const router=express.Router();

// ADD TASK || POST METHOD
const addTask = require(`../controllers/taskController.js`)
router.post("/addtask",addTask.AddTask)








module.exports =router