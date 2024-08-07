import express from "express";
import CarController from "../controllers/CarController.js";
import { verifyToken } from "../helper.js";

const routeCar = express.Router();
const carController = new CarController;

routeCar.use(verifyToken);

routeCar.get('/',carController.index);
routeCar.get('/'+':id',carController.show);
routeCar.post('/',carController.store);
routeCar.put('/'+':id',carController.update);
routeCar.delete('/'+':id',carController.delete);

export default routeCar;