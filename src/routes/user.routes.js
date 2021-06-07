const express = require('express')
const app =express.Router()
const controller= require('../controller/user.controller')
app.get('/',controller.getUsers)
   .post('/',controller.insertUser)
   .put('/:id',controller.updateUser)
   .delete('/:id',controller.deleteUser)
module.exports =app
