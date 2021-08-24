const express = require('express')
const app = express()
const mongoose = require('mongoose')

const homeRoutes = require('./routes/home')
require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Routes
app.use('/', homeRoutes)
//app.use('/todos', todoRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})   