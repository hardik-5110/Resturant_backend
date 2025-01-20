const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleware');
const { createResturantController, getAllResturantController, getResturantByIdController, delteResturantController } = require('../controllers/resturantController');

const router = express.Router();

// routes
// CREATE RESTURANT || POST
router.post("/create",authMiddleware,createResturantController);

// GET ALL RESTURANTS || GET
router.get("/getAll",getAllResturantController);

// GET RESTURANTS BY ID || GET
router.get("/get/:id",getResturantByIdController);

// DELETE RESTURANT || DELETE
router.delete("/delete/:id",authMiddleware,delteResturantController);

module.exports = router;