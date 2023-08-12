import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { users } from "../models/user.js";

export const isAuthenticated = async (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
      const decoded = jwt.verify(token,"ldjkhflsadgfhjkhlgh");
      req.user = await users.findById(decoded._id)
      next();
    } else {
      res.redirect("/login")
    }
  };

export const getlogout = (req, res) => {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
    });
    res.redirect("/");
  };


export const getregister = (req, res) => {
    res.render("register");
  }

export const getlogin =  (req, res) => {
    res.render("login");
  }

export const getnull = (req, res) => {
    res.render("logout");
  }

export const postregister = async (req, res) => {
    console.log(req.body)
  const { name,email, password } = req.body;
  let user = await users.findOne({email})
  if(user){
    return res.redirect("/login")
  }
  const hashedpassword = await bcrypt.hash(password , 10);
  user = await users.create({ 
    name,
    email,
    password:hashedpassword});
  const token = jwt.sign({_id: user._id}, "ldjkhflsadgfhjkhlgh")
  console.log(token);
  res.cookie("token", token);
  res.redirect("/");
}


export const postlogin = async(req,res)=>{
    const {email,password} = req.body
    const user = await users.findOne({email})
    if (!user) return res.redirect("/register")
  

    const IsMatch = await bcrypt.compare(password, user.password)
  
    if(!IsMatch){
      return res.render("login",{email,message:"Incorrect password"})
    }
    const token = jwt.sign({_id: user._id}, "ldjkhflsadgfhjkhlgh")
    console.log(token);
    res.cookie("token", token);
    res.redirect("/");
  
  }