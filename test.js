const express = require('express')
const app = express()

 
app.get('/hoi', function (req, res) {
  res.send('Hello World')
})
 
app.listen(5000,()=>{console.log("listening")})