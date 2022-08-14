const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const cors = require('cors')
const usersRoute = require('./Routes/usersRoute')
require("dotenv").config()


app.use(express.json())
app.use(cors())

app.use('/users',usersRoute)


app.listen(PORT,()=>{
    console.log('Listening to port: '+PORT)
})
