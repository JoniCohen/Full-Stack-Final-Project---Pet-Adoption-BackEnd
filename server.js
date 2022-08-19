const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const cors = require('cors')
const usersRoute = require('./Routes/usersRoute')
require("dotenv").config()
const dbConnection = require('./Data/knex')

app.use(express.json())
app.use(cors())

app.use('/users',usersRoute)

dbConnection.migrate.latest().then((migration)=>{
  if(migration){
    console.log('Connected to DB: '+migration)
    app.listen(PORT,()=>{
      console.log('Listening to port: '+PORT)
  })
  }
})

