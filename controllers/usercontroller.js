import userModel from "../models/userModels.js";
import bcrypt from "bcryptjs";

export const userRegister = async(req,res) => {
    try{
        const {name,email,password} = req.body;
        //validation
        if(!name || !email || !password){
            return res.status(400).send({
                success:false,
                Message:"Please Provide All fields",
            });
        }
        //hashing
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password.salt);

        const userData = {name,email,password: hashedPassword};
        //save user
        const newUser = new userModel(userData);
        const user = await newUser.save();

        res.status(201).send({
            success:true,
            Message:"Register Successfully",
            user,
        });
    } catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            Message:"Something Went Wrong",
            error,
        });
    }
};

        //LOGIN
 export const userLogin = async(req,res) => {
     try{
        const {email,password} = req.body;
        //validation
        if(!email || !password){
            return res.status(400).send({
                success:false,
                Message:"Please add your email or password",
            });
        }
        //find user
        const user = await userModel.findOneAndDelete({email});
        if(!user){
            return res.status(404).send({
                success:false,
                Message:"user not found",
            });
     }
     //match password
     const isMatch = await bcrypt.compare(password,user?.password);
     if(!isMatch){
        return res.status(402).send({
            success:false,
            Message:"invalid Credential",
        });
     }

     user.password = undefined;
     res.status(200).send({
        success:true,
        Message:"login successfully",
        user,
     });
    } catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            Message:"Something Went Wrong",
            error,

        });
    }
 };