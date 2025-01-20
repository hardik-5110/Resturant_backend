const express = require('express');
const userModel = require("../models/userModel");
const bcrypt = require("bcryptjs");

// GET USER INFGO
const getUserController = async (req, res) => {
  try {
    // find user
    const user = await userModel.findById({ _id: req.body.id });
    //validation
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "User Not Found",
      });
    }
    //hide password
    user.password = undefined;
    //resp
    res.status(200).send({
      success: true,
      message: "User get Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Eror in Get User API",
      error,
    });
  }
};

const updateUserController = async(req,res)=>{
  try {
    // find user
    const user = await userModel.findById({_id:req.body.id})
    // validtion
    if(!user){
      return res.status(404).send({
        success:false,
        message:'User not found'
      })
    }
    // update 
    const {username,address,phone} = req.body;
    if(username) user.username = username
    if(address) user.address = address
    if(phone) user.phone = phone
    // save user
    await user.save()
    res.status(200).send({
      success:true,
      message:"User updated successfully",
      user
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Error in update user API",
      error
    })
  }
}

const updatePasswordController = async(req,res)=>{
  try{
    // find user
    const user = await userModel.findById({_id:req.body.id})
    // validation
    if(!user){
      return res.status(404).send({
        success:false,
        message:"User not found"
      })
    }
    // get data from user
    const {oldPassword,newPassword} = req.body;
    if(!oldPassword || !newPassword){
      return res.status(500).send({
        success:false,
        message:"Please provide old or new password"
      })
    }
    // check password
    const isMatch = await bcrypt.compare(oldPassword,user.password);
    if(!isMatch){
      return res.status(500).send({
        success:false,
        message:"Invalid Old password"
      })
    }
    // hashing password
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    user.password = hashedPassword;
    await user.save()
    res.status(200).send({
      success:true,
      message:"Password updated Successfully"
    })
  }catch(error){
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Error in password update API",
      error
    })
  }
}


const resetPasswordController = async(req,res)=>{
  try {
    const {email, newPassword, answer} = req.body;
    if(!email || !newPassword || !answer){
      return res.status(500).send({
        success:false,
        message:"Please provide all fields"
      })
    }
    const user = await userModel.findOne({email,answer});
    if(!user){
      return res.status(500).send({
        success:false,
        message:"User not found or invalid answer"
      })
    }
    // hashing password
    var salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(newPassword,salt);
    user.password = hashedPassword
    await user.save()
    res.status(200).send({
      success:true,
      message:"Password reset successfully",
      user
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Error in Password update API",
      error
    })
  }
}

// DLETE PROFILE ACCOUNT

const deleteProfileController = async(req,res)=>{
  try {
    // find user
    await userModel.findByIdAndDelete(req.params.id);
    return res.status(200).send({
      success:true,
      message:"Profile Delete SuccessFully"
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Error in delete profile API"
    })
  }
}


module.exports = {getUserController,updateUserController,updatePasswordController,resetPasswordController,deleteProfileController}
