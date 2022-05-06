const express = require("express");
const AccountProcess = require("../controllers/userFunc");
//const controllers = require('../controllers/userFunc')
const UserRouter = express.Router()

UserRouter.get("/signIn", AccountProcess.postSignUp )

module.exports = UserRouter 
