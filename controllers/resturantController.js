const express = require('express');
const resturantModel = require('../models/resturantModel');

const createResturantController = async (req,res)=>{
    try{
        const {
            title,
            imageUrl,
            food,
            time,
            pickup,
            delivery,
            isOpen,
            logUrl,
            rating,
            ratingCount,
            code,
            coords, 
        } = req.body;
        // validation
        if(!title || !coords){
            return res.status(500).send({
                success:false,
                message:"Please provide title and Address",
            });
        }
        const newResturant = new resturantModel({title,
            imageUrl,
            food,
            time,
            pickup,
            delivery,
            isOpen,
            logUrl,
            rating,
            ratingCount,
            code,
            coords, })
            await newResturant.save();
            res.status(201).send({
                success:true,
                message:"New Resturant Created successfully",
                newResturant
            })
    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in create Resturant API",
            error
        })
    }
}

const getAllResturantController = async(req,res)=>{
    try {
        const resturants = await resturantModel.find({})
        if(!resturants){
            return res.status(500).send({
                success:false,
                message:"No resturant available"
            })
        }
        res.status(200).send({
            success:true,
            message:"all fetched successfully",
            totalCount: resturants.length,
            resturants
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"error in get all resturant api",
            error
        })
    }
}

// get resturants by id
const getResturantByIdController = async(req,res)=>{
    try {
        const resturantId = req.params.id
        if(resturantId){
            return res.status(404).send({
                success:false,
                message:"Please provide resturant id"
            })
        }
        // find resturant
        const resturant = await resturantModel.findById(resturantId);
        if(!resturant){
            return res.status(404).send({
                success:false,
                message:"no resturant found"
            })
        }
        res.status(200).send({
            success:true,
            message:"fetehed resturant successfully",
            resturant
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in Get resturant by id api",
            error
        })
    }
}

// delete resturant 
const delteResturantController = async(req,res)=>{
    try {
        const resturantId = req.params.id;
        if(!resturantId){
            return res.status(404).send({
                success:false,
                message:"No resturant Found or provide resturant id"
            });
        }
        await resturantModel.findByIdAndDelete(resturantId);
        res.status(200).send({
            success:true,
            message:"Successfully deleted resturant"
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success:false,
            message:"Error in delete resturant API",
            error
        })
    }
}


module.exports = {createResturantController,
    getAllResturantController,
    getResturantByIdController,
    delteResturantController
};