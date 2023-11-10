/**
* call library
*/
const express = require('express')
const router = express.Router()
const User = require('../models/user.model')
const passport = require('passport')
const authController = require('../controllers/auth.controllers')
router.post('/register', authController.register)
module.exports=router