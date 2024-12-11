const User=require('../models/userModel');
const { use } = require('../routes/authRoute');
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
        expiresIn:'90d'
    });

    res.status(201).json({
        status:'success',
        message:'User registered sucessfully',
        token,
        user:{
          _id:newUser._id,
          name:newUser.name,
          email:newUser.email,
          role:newUser.role,
         },
    });

   }catch(error){
     next(error);
   }
};


// Login user
exports.login=async(req,res,next)=>{
  try {
    const {email,password}=req.body;

    const user=await User.findOne({email});

    if(!user) return next(new createError("User Not found!",400));

    const isPasswordvalid=await bcrypt.compare(password,user.password);

    if(!isPasswordvalid){
      return next(new createError("Invalid email or  Password",401))
    }
    const token=jwt.sign({_id:newUser._id},'secretkey123',{
      expiresIn:'90d'
  });

  res.status(200).json({
    status:'sucess',
    token,
    message:'Logged in successfully',
    user:{
      _id:user._id,
      name:user.name,
      email:user.email,
      role:user.role,
     },
  });

  } catch (error) {
    next(error);
  }
};