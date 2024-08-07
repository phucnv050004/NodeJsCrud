import jwt from 'jsonwebtoken';

export function verifyToken(req, res,next){
    const bearerToken = req.headers['authorization'];

    if(bearerToken != undefined){
        const token = bearerToken.split(" ")[1]
        try {
            jwt.verify(token,process.env.JWT_SECRET);
            return next();
        } catch (error) {
            res.sendStatus(401)
        }
    }else{
        res.sendStatus(401)
    }
}