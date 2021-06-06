const express = require('express')
const app =express.Router()
const controller= require('../controller/user.controller')
app.get('/',controller.getUsers)
app.post('/',controller.insertUser)
app.put('/:id',controller.updateUser)
app.delete('/:id',controller.deleteUser)
module.exports =app
