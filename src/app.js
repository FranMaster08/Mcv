const express=require('express')
const path = require('path');
const nunjucks = require('nunjucks');
const app=express()
app.use(express.static(path.join(__dirname, '/public')))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.set('view engine')
nunjucks.configure(path.resolve(__dirname,'./view'),{
    autoescape:false,
    express:app
})
app.use('/',require('./routes/index.routes'))
module.exports =app