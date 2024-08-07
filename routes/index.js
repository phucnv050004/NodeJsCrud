import routeCar from "./car.js";
import routeAuth from "./auth.js";
export default function router(app){
    app.use('/api/v1/cars',routeCar);
    app.use('/api/v1/auth',routeAuth)
}