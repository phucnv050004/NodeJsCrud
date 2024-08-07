import express from "express";
import AuthController from "../controllers/AuthController.js";

const routeAuth = express.Router();
const authController = new AuthController;

routeAuth.post('/login',authController.login);
routeAuth.post('/register',authController.register);


export default routeAuth;