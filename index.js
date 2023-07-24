const express = require('express')

const port = 8000

const app = express()

const db = require('./config/mongoose')

const passport = require('passport')

// const passportJWT = require('./config/passport-jwt-strategy')

const session = require('express-session')

app.use(session({
    name : 'smit',
    secret : 'Gandhi',
    saveUninitialized : true,
    resave : true,
    cookie : {
        maxAge : 1000*60*60*24
    }
}))

app.use(passport.session());
app.use(passport.initialize())
app.use(express.urlencoded())


app.use('/',require('./routes'))

app.listen(port,(err)=>{
    if(err){
        console.log(err);
        return false
    }
    console.log("Server is start on port",port);
})