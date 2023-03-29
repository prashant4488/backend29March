const express = require("express");
const {
    register,
    verifyUser,
    resendVerifcation,
    signIn,
    signOut,
    forgetPassword,
    resetPassword,
    getUserDetails,
} = require("../controller/userController");
const router = express.Router();

router.post("/register", register);
router.get("/verification/:token", verifyUser);
router.post("/resendVerification", resendVerifcation);
router.post("/signin", signIn); 
router.get("/signout", signOut);
router.post("/forgetpassword", forgetPassword);
router.post('/resetpassword/:token',resetPassword)
router.get('/getuserdetails/:id',getUserDetails)

// userlist
// userdetail
// finduserbyemail
// finduserbyusername
// updateuser
// deleteuser
module.exports = router;
