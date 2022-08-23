const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const cors = require('cors')
const usersRoute = require('./Routes/usersRoute')
const petsRoute = require('./Routes/petsRoute')
require("dotenv").config()
const dbConnection = require('./Data/knex')
const  cookieparser = require('cookie-parser');
app.use(cookieparser());

app.use(express.json())
app.use(cors({origin:'http://localhost:3000',credentials:true}))

app.use('/users',usersRoute)
app.use('/pets',petsRoute)

dbConnection.migrate.latest().then((migration)=>{
  if(migration){
    console.log('Connected to DB: '+migration)
    app.listen(PORT,()=>{
      console.log('Listening to port: '+PORT)
  })
  }
})

