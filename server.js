const express = require('express')
const app = express()
const mongoose = require('mongoose')
const connectDB = require('./config/database')
const homeRoutes = require('./routes/home')
const todosRoutes = require('./routes/todos')

require('dotenv').config({path: './config/.env'})
connectDB()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


// Run MongoDB

// Routes
app.use('/', homeRoutes)
app.use('/todos', todosRoutes)

app.listen(process.env.PORT, ()=>{
    console.log('Server is running, you better catch it!')
})   