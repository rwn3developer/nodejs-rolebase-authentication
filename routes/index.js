const express = require('express')

const routes = express.Router();



const ApiCrud = require('../Controller/ApiCrudController');
const passport = require('passport');
const passportJWT = require('../config/passport-jwt-strategy');
const {checkRole} = require('../config/chekRole');



routes.get('/',ApiCrud.index)
routes.post('/insertdata',ApiCrud.insertdata)
routes.get('/viewdata',checkRole('admin'),passport.authenticate('jwt',{session : false}),ApiCrud.viewdata)
routes.delete('/deletedata',ApiCrud.deletedata)
routes.put('/editdata',ApiCrud.editdata)
routes.post('/login',ApiCrud.login)

module.exports = routes