const express = require('express');
const { getUserController, updateUserController, updatePasswordController, resetPasswordController, deleteProfileController } = require('../controllers/userController');
const {authMiddleware} = require('../middlewares/authMiddleware');

const router = express.Router();

// routes
// GET USER || GET
router.get('/getUser',authMiddleware, getUserController);

// update user || PUT
router.put('/updateUser',authMiddleware, updateUserController);

// password update
router.post("/updatePassword",authMiddleware,updatePasswordController);

// Reset password
router.post("/resetPassword",authMiddleware,resetPasswordController);

// delete profile 
router.delete("/deleteUser/:id",authMiddleware,deleteProfileController);

module.exports = router;