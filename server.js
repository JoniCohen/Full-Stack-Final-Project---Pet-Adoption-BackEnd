const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const cors = require('cors')
const usersRoute = require('./Routes/usersRoute')
require("dotenv").config()
const knexConfig = require('./Data/knexfile')
const knex = require('knex')

app.use(express.json())
app.use(cors())

app.use('/users',usersRoute)

const dbConnection = knex(knexConfig)
dbConnection.
migrate.
latest()
.then(((migration)=>{
    if(migration){
        console.log('Connected to DB'+migration)
        app.listen(PORT,()=>{
            console.log('Listening to port: '+PORT)
        })
    }
}))

.catch(err =>console.log(err))

export {dbConnection}