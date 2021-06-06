const express = require('express')
const app =express.Router()
app.use('/users',require('./user.routes'))
module.exports =app
