const ApiTbl = require('../models/APITbl')
const jwtData = require('jsonwebtoken')

const index = (req,res)=>{
    return res.json({message : "Done"})
}

const insertdata = async(req,res)=>{
    try {
        let Apidata = await ApiTbl.findOne({email : req.body.email});
        if(Apidata){
            return res.json({status : 0,message : 'Record already exists!!'})
        }
        else{
            let insertdata = await ApiTbl.create({
                name : req.body.name,
                email : req.body.email,
                password : req.body.password,
                role : req.body.role
            })
            if(insertdata){
                return res.json({status : 1,message : 'Record Successfully Insert'})
            }
            else{
                return res.json({status : 0,message : 'Record Not Successfully Insert'})
            }
        }
    } 
    catch (error) {
        console.log(error);
        return false
    }
}

const viewdata = async(req,res)=>{
    try {
        let viewdata = await ApiTbl.find({})
        if(viewdata){
            return res.json({status : 1,message : viewdata})
        }
        else{
            return res.json({status : 0,message : 'Record Not found'})
        }
    } 
    catch (error) {
        console.log(error);
        return false
    }
}

const deletedata = async(req,res)=>{
    try {
        let id = req.query.id
        let deletedata = await ApiTbl.findByIdAndDelete(id)
        if(deletedata){
            return res.json({status : 1,messege : "Record delete"})
        }
        else{
            return res.json({status : 0,messege : 'Record not delete'});
        }
    } 
    catch (error) {
        console.log(error);
        return false
    }
}

const editdata = async(req,res)=>{
    try {
        let updatedata = await ApiTbl.findByIdAndUpdate(req.body.id,{
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        });
        if(updatedata){
            return res.json({status : 1,message : "Update Successful"})
        }
        else{
            return res.json({status : 0,message : "Update not Successful"})
        }
    } 
    catch (error) {
        console.log(error);
        return false
    }
}

const login = async(req,res)=>{
    try {
        let logindata = await ApiTbl.findOne({email : req.body.email})
        if(!logindata || logindata.password != req.body.password){
            return res.json({status : 0,message : "Email or Password Maybe Wrong"})
        }
        let token = jwtData.sign({payload : logindata},'Miyu',{expiresIn : '1h'})
        return res.json({token : token})
    } 
    catch (err) {
        console.log(err);
        return false
    }
}

module.exports = {
    index,
    insertdata,
    viewdata,
    deletedata,
    editdata,
    login
}

//har har mahadev