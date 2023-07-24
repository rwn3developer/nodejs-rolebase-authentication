const passport = require('passport')

const User = require('../models/APITbl')

var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'Miyu';

const checkRole = (role) => {
    return (req,res,next) => {
        passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
            try {
                        let userdata = await User.findOne({email : jwt_payload.payload.email})
                        console.log(userdata);
                        if(userdata.role != role){
                            return res.json({messege : 'not access'})
                        }
                        return next() 
                    } 
                    catch (err) {   
                        return done(null,false)  
                    }
                }));
                return next()
    }
}

module.exports = {checkRole};