import User from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt  from 'jsonwebtoken';


// function for register
export const register = async(req, res) => {
const userData = req.body;
userData.password = await bcrypt.hash(userData.password, 10);
const data = await User.create(userData);
res.status(200).send({ status: true, message: 'Successfully registered!'});
}

// function for login
export const login = async(req, res) => {
const { email, password } = req.body;
const userData = await User.findOne({ email: email.toLowerCase()} ).select('+password');

if(!userData){
    res.status(401).send({ status: false, message: 'Invalid credentials'} );
    return;
}

if(!bcrypt.compare(password, userData.password)){
    res.status(401).send({ status: false, message: 'Invalid credentials' });
    return;
}

// Generate JWT token
const jwtToken = await userData.generateJWTToken();
    res.cookie('token', jwtToken, {
        maxAge: 2 * 24 * 60 * 60 * 1000,
    });


// Put JWT token in cookie.
res.status(200).send({ status: true, message: 'Successfully loggedIn!' })
}

 // function for get profile
//  export const getProfile = async(req, res) => {
//   const { token } = req.cookies;
//   const tokenDetails = jwt.verify(token, process.env.JWT_PASSWORD);
//   const userDetail = await User.findById(tokenDetails.id);
//   res.status(200).send(userDetail);
// }

//  modified function for get profile
  export const getProfile = async (req, res) => {
  const userId = req.user.id;
  const userDetail = await User.findById(userId);
  res.status(200).send(userDetail);
}