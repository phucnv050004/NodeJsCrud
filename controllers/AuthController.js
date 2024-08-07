import User from "../models/User.js";
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validateRegister from "../validation/AuthRegister.js";
import validateLogin from "../validation/AuthLogin.js";

class AuthController{
       async login(req, res){
        try {
            const output = await validateLogin.validate(req.body);
            
            const user = await User.findOne({email:output.email})
            if(user){
                const match = await bcryptjs.compareSync(output.password,output.user);
            if(match){
                const token = jwt.sign({user: user},process.env.JWT_SECRET,{expiresIn:"1h"})
                res.json(token);
            }
            throw 'password not match'
               
            }
            throw 'User not found';
        } catch (error) {
            res.json(error);
        }
       }
       async register(req, res){
        try {
        const output = await validateRegister.validate(req.body);
           let data = {
            email:output.email,
            password:output.password
           };

           const salt = await bcryptjs.genSaltSync(parseInt(process.env.SAIL_ROUND));
           data.password = await bcryptjs.hashSync(data.password,salt);

           const user = await User.create(data);

           const token = jwt.sign({user: user},process.env.JWT_SECRET,{expiresIn:"1h"})
           res.json(token);
        } catch (error) {
            res.json(error);
        }
       }
}
export default AuthController;