import express from 'express';
import mongoose from 'mongoose';
import Sumit from '../Backend/model/User.js';
import dotenv from 'dotenv';
dotenv.config();

const PORT = 3000;

const app = express();

app.use(express.json());

const router = express.Router();

app.use(router);



// Connecting Database

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("connected DB")
    } catch (error) {
        console.log(error);
    }
}

connectDB();


//middleware

function mid(req,res,next){
    console.log("I am middleware!");
    next();

}
function midSecond(req,res,next){
    console.log("I am second middleware!");
    next();
}


// Router

router.get('/router',(req,res)=> {
    res.send("I am from router!");
})

router.get('/createUser',async(req,res)=>{

    console.log("new user creating!");
    await Sumit.create({
        name:"Sumit Gupta",
        email:"sumit@gmail.com",
        password:"abc"
    });

    res.json(Sumit);

})

router.post('/createNewUser',async(req,res)=> {
    console.log('hit create route');
    console.log(req.body);
    await Sumit.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
    });
    res.status(200).json({
        message:"user created successfully"
    })
    
})

// CRUD operation / Methods

app.get('/', (req,res) => {
    res.send("entered in backend");
})

app.get('/sumit',mid,midSecond,(req,res) => {
    res.json("give some data");
})

app.get('/sumit/redirect', (req,res) => {
    res.redirect('/')
})

app.listen(PORT, (req,res) => {
    console.log("Hii backend", PORT);
})