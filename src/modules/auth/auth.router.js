const router=require('express').Router()//express routing middleware

const loginCheck=require("../../middleware/auth.middleware")//..goes two step back in folder

const {uploader,pathSet}=require("../../middleware/uploader.middleware")
const authCtrl=require("../auth/auth.controller")
const {registerSchema}=require("../auth/auth.request")
const validatebody=require("../../middleware/bodyvalidator.middleware")


//uploader.none,single,array
router.post("/register",pathSet("/uploads/user"),uploader.single("image"), validatebody(registerSchema), authCtrl.register);
router.get("/verify-token/:token",authCtrl.verifyRegisterToken)
router.get("/activate/:token",authCtrl.activateUser)

//http://localhost:3005/api/v1/auth/login
router.post("/login",authCtrl.login)
router.get("/me",loginCheck,authCtrl.getLoggedinUser)
router.post("/change-password",loginCheck,authCtrl.changepassword)



router.post("/forget-password",authCtrl.forgetpassword)
router.post("/forget-password/:token/verify",authCtrl.verifyForgetPasswordToken)
router.post("/set-password/:token",authCtrl.setpassword)


module.exports=router