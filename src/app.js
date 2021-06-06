const express=require('express')
const app=express()
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use('/',require('./routes/index.routes'))
module.exports =app