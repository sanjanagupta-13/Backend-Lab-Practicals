// const express=require('express');
// require('dotenv').config();
// const app=express();
// app.use(express.json());

// const mongo=require('mongoose');
// const User=require('./user');
// mongo.connect(process.env.mongourl).then(()=>{
//     console.log("connected to db");
// }).catch((err)=>{
//     console.log("error connecting to db",err);
// });


// // ================= GET ALL USERS =================
// app.get("/User", async (req, res) => {
//   try {
//     const users = await User.find();  //  fetch data from DB
//     res.json({
//       message: "User fetched successfully",
//       allUsers: users   //  return the data
//     });
//   } catch (err) {
//     res.status(404).json({ error: err.message });
//   }
// });

// // ================= REGISTER USER =================
// app.post("/register", async (req, res) => {
//   try {
//     const { name, email, password, phone } = req.body;

//     const user = await User.create({ name, email, password, phone }); // ✅ don't shadow model

//     res.json({
//       message: "User created successfully",
//       newUser:user
//     });
//   } catch (err) {
//     res.json(err);
//   }
// });

// // ================= GET USER BY ID =================
// app.get("/users/:id", async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);

//     if (!user) {
//       return res.json({ message: "User not found" });
//     }

//     res.json(user);
//   } catch (err) {
//     res.json(err);
//   }
// });

// // ================= UPDATE USER =================
// app.patch("/update/:id", async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       { $set: req.body },
//       { new: true }
//     );

//     if (!updatedUser) {
//       return res.json({ message: "User not found" });
//     }

//     res.json({
//       message: "User updated successfully",
//       updatedUser
//     });
//   } catch (err) {
//     res.json(err);
//   }
// });

// // ================= DELETE USER =================
// app.delete("/delete/:id", async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.params.id);

//     if (!deletedUser) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     res.json({
//       message: "Deleted",
//       deletedUser
//     });
//   } catch (err) {
//     res.json(err);
//   }
// });


// // ================= SERVER =================
// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

// ===============================JWT=========================================

const express = require('express')
const bcrypt= require('bcrypt')
const User= require('./user')
const jwt=require('jsonwebtoken')
const app=express()
const mongoose=require('mongoose')
app.use(express.json())
const dotenv=require('dotenv')

dotenv.config()

mongoose.connect(process.env.mongourl).then(()=>{
    console.log("DB connected");
}).catch((err)=>{
    console.log(err);
    
})
const generateToken=(userId)=>{
    return jwt.sign({id:userId},process.env.secret,{expiresIn:'1h'});
}
    
const verfiyToken=(req,res,next)=>{
const authheader = req.headers.authorization;
if(!authheader){
    return res.json({messsage:"token mmissing"})
}

const token = authheader.split(' ')[1];

try{
   const decoded=jwt.verify(token,process.env.secret);
   req.id=decoded.id;
   next() 
}
catch(err){
    res.json({err})
}
}

app.use(express.static('model'))
app.post('/register',async(req,res)=>{
    try{
        const {name,email,password,phone}=req.body
        const hashPassword=await bcrypt.hash(password,10);
        const user=await User.create({
            name,
            email,
            password:hashPassword,
            phone
        })
        res.json({message:"user registered successfully",newUser:user})
    }
    catch(err){
        res.json({err})
    }
})


app.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body

        const user=await User.findOne({email})
        if(!user){
            return res.json({message:"user not found"})
        }
        const isPasswordValid=await bcrypt.compare(password,user.password)
        if(!isPasswordValid)
    {
    return res.json({message:"invaid credentials"})
    }
    const token=await generateToken(User.id)
    res.json({message:"user login successfully",token:token})
}
catch(err){
    res.json({err})
}
})

app.get('/user',verfiyToken,async(req,res)=>{
    try{
        const user=await User.find()
        res.json({messsage:"user fetcched",alluser:user})
    }
    catch(err){
        res.json({err})
    }
})
app.listen(3000)