const express = require("express")
const router = express.Router()
const Categories = require("../controller/categories.controller")
const Category = require("../models/category.model")

router.get("/", Categories.getCategories) 
router.post("/create", Categories.postCategory) 
router.put("/img/:cID", Categories.postImage) 
router.delete("/:cID", Categories.deleteCategory)

module.exports = router