const db= require(`../config/dbConnection.js`)

//ADD TASK CONTROLLER
exports.AddTask = async(req,res)=>{
    try{
        const {description,details}=req.body;
        const {userId}=req.user
        if(!description || !details ){
            return res.status(501).send({
                success:false,
                message:"All field required"
            })
        }
        const insertData={description,details,userId}
        const insertQuery= `INSERT INTO task SET ?`
        db.query(insertQuery,insertData,(err,result)=>{
            if(err){
                console.log(err);
                return res.status(400).send({
                    success:false,
                    message:"Data insert error"
                })
            }
            else{
                console.log(result.insertId)
                res.status(200).send({
                    success:true,
                    message:"task create success"
                })
            }
        })
    }
    catch(err){
        console.error("Error",err);
        return res.status(500).send({
            success:false,
            message:"task create error"
        })
    }
    
}

// GET TASK CONTROLLER
exports.getTask =async(req,res)=>{
    try{
        const getAlltask = `SELECT * FROM task`
        db.query(getAlltask,(err,results)=>{
            if(err){
                console.log(err);
                return res.status(500).send({success:false,message:'Internal server error'})
            }
            else{
                //console.log(results)
                res.status(200).send({success:true,message:'task get successfully',results})
            }
        })
    }
    catch(err){
        console.error("Error",err)
        res.status(500).send({success:false,message:'Error task'})
    }
}

//UPDATE TASK CONTROLLER
exports.updateTask =async(req,res)=>{
    try{
        const taskId = req.params.taskId
        //console.log(taskId)
        const {description,details}=req.body;
        const updateData = [description,details,taskId]
        const updateQuery= `UPDATE task SET description = ?, details = ? WHERE id = ?;`;
        db.query(updateQuery,updateData,(err,results)=>{
            if(err){
                console.error(err)
                return res.status(500).send({success:false,message:'Internal server error'})
            }
            else{
                res.status(200).send({success:true,message:"update successfully"})
            }
        })

    }
    catch(err){
        console.err("Error:",err)
    }
}

// DELETE TASK CONTROLLER
exports.delteTask= async(req,res)=>{
    try{
        const taskId = req.params.taskId
        //console.log(taskId)
        const deleteQuery =`DELETE FROM task WHERE id =? ;`
        db.query(deleteQuery,taskId,(err,results)=>{
            if(err){
                console.log(err)
                return res.status(500).send({success:false,message:"Internal server error"})
            }
            else{
                res.status(200).send({success:true,message:"delete successfully"})
            }
        })
    }
    catch(err){
        console.error("Error:",err)
    }
}