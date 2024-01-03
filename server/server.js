//REQUIRE EXPRESS
const express =require(`express`);
const app =express();
app.use(express.json());

//REQUIRE BODY-PARSER
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//REQUIRE MORGAN
const morgan = require('morgan');
app.use(morgan('dev'));

//REQUIRE CORS
const cors = require('cors')
app.use(cors())

//REQUIRE DOTENV
const dotenv =require('dotenv').config()

//DATABASE CONNECTION
const db =require("./config/dbConnection.js")
/////////////DATABASE MODELS////////////////
//AUTH MODEL
const authModel =require(`./models/authRegister.js`)
//TASK MODEL 
const taskModel = require(`./models/task.js`)


///////////////// REST API /////////////////

//HOME ROUTE
app.get("/",(req,res)=>{
    res.status(200).send({
        success:true,
        message:"This is home page"
    })
})

//AUTH ROUTE
const authRoute =require(`./routes/authRegistation.js`)
app.use("/api/auth",authRoute)

//TASK ROUTE
const taskRoute =require(`./routes/taskRoute.js`)
app.use("/api",taskRoute)






//PORT
const PORT= process.env.PORT || 9000;

//SERVER LISTEN
app.listen(PORT,()=>{
    console.log(`server is running ${PORT}`)
});