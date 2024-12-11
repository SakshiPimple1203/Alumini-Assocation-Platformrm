const User=require('../models/userModel');
const createError = require('../utils/appError');
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken')

// Register user
exports.signup=async(req,res,next)=>{
   try{
      const user=await User.findOne({email:req.body.email});

      if(user){
        return next(new createError('user already exists!',400));
      }

      const hashedPassword=await bcrypt.hash(req.body.password,12);

      const newUser=await User.create({
        ...req.body,
        password:hashedPassword,
      });

    //   JWT (json web token)

    const token=jwt.sign({_id:newUser._id},'secretkey123',{
        expiresIn:'900'
    });

    res.status(201).json({
        status:'success',
        message:'User registered sucessfully',
        token,
    });

   }catch(erorr){
     next(error);
   }


};


// Login user
exports.login=async(req,res,next)=>{};