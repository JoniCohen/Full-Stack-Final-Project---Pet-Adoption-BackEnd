const express = require('express')
const app = express()
const PORT = process.env.PORT || 8080
const cors = require('cors')
const usersRoute = require('./Routes/usersRoute')
require("dotenv").config()

/*const  mysql      = require('mysql');
const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'joni94sql'
});
connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });*/



app.use(express.json())
app.use(cors())

app.use('/users',usersRoute)


app.listen(PORT,()=>{
    console.log('Listening to port: '+PORT)
})
