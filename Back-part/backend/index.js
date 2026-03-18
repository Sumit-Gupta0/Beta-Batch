import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const PORT = 3000;

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("conneted DB");
    } catch (error) {
        console.log(error)
    }
}

connectDB();

app.get('/',(req,res)=>{
    res.send("hii code");
})

app.get('/sumit',(req,res)=>{
    res.json("give answer");
})

app.get('/sumit/redirect',(req,res)=>{
    res.redirect('/');
})

app.listen(PORT, (req,res)=>{
    console.log("making app",PORT);
})