const db= require("../config/dbConnection.js");
const jwt =require("jsonwebtoken")

//REGISTATION 
exports.Register =async(req,res)=>{
    try{
        const {fullName,email,contactnumber,gender,password,role}=req.body
        console.log(req.body)
        if(!fullName || !email || !contactnumber || !gender || !password){
             res.status(501).send({
                success:false,
                message:"All field required"
            })
        }

        //EXISTING QUERY
        const existingData =`SELECT * FROM  users WHERE email =? OR contactnumber = ?`
        db.query(existingData,[email,contactnumber],(err,result)=>{
            if(err){
                console.log(err)
               return res.status(500).send({success:false,message:"database error"})
            }
            else if(result.length>0){
               return res.status(409).send({success:false,message:"already registered"}) 
            }
            else{
                const registerData= {
                    fullName,
                    email,
                    contactnumber,
                    gender,
                    password,
                    role: role || 'user'
                }
                //INSERT QUERY
                const registerQuery =`INSERT INTO users SET ?`
                db.query(registerQuery,registerData,(err,result)=>{
                    if(err){
                        console.error("error",err)
        
                        return res.status(501).send({success:false,message:"Data insert error"})
                    }
                    else{
                        console.log(result.id)
                        res.status(200).send({success:true,message:"Registation successfully"})
                    }
                })
            }
        })
    }
    catch(err){
        console.error("err:",err)
         return res.status(500).send({
            success:false,
            message:"Registation Error"
        })
    }
}

//LOGIN
exports.Login=async(req,res)=>{
    try{
        const{email,password,role}=req.body
        //EXISTING EMAIL
        const existingEmail = `SELECT * FROM users WHERE email = ?`
        db.query(existingEmail,[email],(err,result)=>{
            if(err){
                console.log(err)
               return res.status(500).send({success:false,message:"database error"})
            }
            else if(result.length ==0){ 
               return res.status(400).send({success:false,message:"email not found"})
            }
            else{
                const user = result[0]
                if(user.password != password){
                   return res.status(401).send({success:false,message:"password not found"})  
                }
                else{
                    const token =jwt.sign(
                        {userId:user.id,email:user.email,role:user.role},
                        process.env.jwt_secret,{expiresIn:'1d'}
                    )
                    res.status(200).send({success:true,message:"Login success", user,token,role})
                }
            }
        })
    }
    catch(err){
        console.error("err:",err)
        res.status(500).send({
            success:false,
            message:"Login Error"
        })
    }
}

//TEST ROUTE
exports.testController=(req,res)=>{
    res.status(200).send({success:true,message:"Protected route"})
}