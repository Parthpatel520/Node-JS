const express = require('express')
const app = express()
const cookie = require('cookie-parser')
app.use(cookie())

const routes= require("../ADMINPANAL/routes/r-user")
app.set('view engine', 'ejs')
app.use(express.static(__dirname))  
app.use(routes)

app.get ('/',(req,res)=>{
    res.render('login')
})
app.get ('/register',(req,res)=>{ 
    res.render('register')
})

app.listen(8950,()=>{
    console.log("server listening on port 8950") ;
});