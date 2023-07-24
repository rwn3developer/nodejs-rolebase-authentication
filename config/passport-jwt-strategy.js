// const passport = require('passport')

// const User = require('../models/APITbl')

// var JwtStrategy = require('passport-jwt').Strategy,
//     ExtractJwt = require('passport-jwt').ExtractJwt;
// var opts = {}
// opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
// opts.secretOrKey = 'Miyu';

// passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
//     try {
//         let userdata = await User.findOne({id : jwt_payload.payload.id})
//         if(userdata){
//             return done(null,userdata)
//         }
//         else{
//             return done(null,false)
//         }
//     } 
//     catch (err) {   
//         return done(null,false)  
//     }
// }));


// module.exports = passport