const db= require(`../config/dbConnection.js`)

exports.AddTask = async(req,res)=>{
    const {description,details}=req.body;
    
}