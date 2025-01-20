const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleware");
const { createCategoryController, getAllCategoryController, updatecategoryController, deleteCategoryController } = require("../controllers/categoryController");

const router = express.Router();

// CREATE CATEGORY 
router.post("/create",authMiddleware,createCategoryController);

// GET ALL CATEGORY || GET
router.get("/getAllCategory",getAllCategoryController);

// UPDATE CATEFORY
router.put("/update/:id",authMiddleware,updatecategoryController);

// DELETE CATEGORY
router.delete("/delete/:id",authMiddleware,deleteCategoryController);

module.exports = router;