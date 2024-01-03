const express =require(`express`);


//ROUTER
const router=express.Router();

// ADD TASK || POST METHOD
const authMiddlware =require(`../middlewares/authMiddleware.js`)
const Task = require(`../controllers/taskController.js`)
router.post("/addtask",authMiddlware.requireSignIn,Task.AddTask)

// GET TASK || GET METHOD
router.get("/task",Task.getTask);

// UPDATE TASK || PUT METHOD
router.put("/updatetask/:taskId",Task.updateTask)

// DELETE TASK || DELETE METHOD
router.delete("/deletetask/:taskId",Task.delteTask)





module.exports =router