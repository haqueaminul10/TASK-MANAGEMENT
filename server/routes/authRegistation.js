const express =require(`express`)

//ROUTER
const router=express.Router();

//  REGISTATION || POST METHOD
const authControl =require(`../controllers/authController.js`)
router.post("/register",authControl.Register)

//  LOG IN || POST METHOD
router.post("/login",authControl.Login)

//TEST ROUTE
const authMiddleware =require(`../middlewares/authMiddleware.js`)
router.get("/test",
authMiddleware.requireSignIn,authMiddleware.isAdmin(`admin`),
authControl.testController)

//PROTECTED ROUTE
router.get("/user-auth",authMiddleware.requireSignIn,(req,res)=>{
    res.status(200).send({ ok:true})
})

//PROTECTED ADMIN ROUTE
router.get("/admin-auth",authMiddleware.requireSignIn,authMiddleware.isAdmin(`admin`),(req,res)=>{
    res.status(200).send({ ok:true})
})

module.exports =router