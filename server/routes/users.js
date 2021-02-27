const express = require("express")
const router = express.Router()
const Users = require("../controller/users.controller")

router.get("/", Users.getUsers) 
router.get("/:uID", Users.getAUser) 
router.post("/create", Users.createUser) 
router.put("/modifyname/:uID", Users.editAUserName) 
router.put("/modifyemail/:uID", Users.editAUserEmail) 
router.put("/modifypassword/:uID", Users.editAUserPassword) 
router.put("/modifycategory/:uID", Users.editAUserCategory) 
router.delete("/:uID", Users.deleteUser)

module.exports = router