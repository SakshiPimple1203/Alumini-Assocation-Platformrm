const express = require('express');
const mongoose = require('mongoose');
const cors=require('cors');
const authRouter = require('./routes/authRoute');

const app=express();

// 1) MIDDLEWARES
app.use(cors());
app.use(express.json());

// 2) ROUTE
app.use('/api/auth',authRouter);

// 3) MONGO BD CONNECTION 
mongoose
   .connect('mongodb://127.0.0.1:27017/authentication')
   .then(()=>console.log('connected to mongodb!'))
   .catch((erorr)=>console.error('failed to connect to mongodb',erorr))
// 4)GLOBAL ERROR HANDLING


app.use((err,req,res,next)=>{
    err.statusCode=err.statusCode || 500;
    err.status=err.status || 'error';


    res.status(err.statusCode).json({
        status:err.status,
        message:err.message,
    });
});
// 5) SERVER

const PORT=3000;
app.listen(PORT,()=>{
    console.log(`App runing on ${PORT}`);
});