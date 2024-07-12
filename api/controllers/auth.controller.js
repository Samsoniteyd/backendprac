import bcrypt from "bcrypt";
import prisma from "../lib/prisma.js";





export const register = async(req, res) => {
  
    const {username, email, password } = req.body;

    try{

        // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); 

    console.log (hashedPassword);


    // create a new user and save to db 
    const newUser = await prisma.user.create({
        data: {
            username,
            email,
            password: hashedPassword,

        },
    });
    console.log(newUser);

    res.status(201).json({message:"User created successfully "})

    } catch (err) {

        console.log(err);
    res.status(500).json(err);
    // {message: "failed to create user!"} 
    }


};
export const login = async(req, res) => {

};
export const logout = (req, res) => {

};