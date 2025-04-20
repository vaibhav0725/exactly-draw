import { NextFunction, Request, Response } from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "@repo/server-common/config"

export const middleware=( req:Request , res:Response , next:NextFunction ) => {
    try {

        const token = req.headers["authorization"] ?? "";
        const decoded = jwt.verify( token , JWT_SECRET )

        if(decoded) {
            req.userId = decoded.userId;
            next();
        }
        else {
            res.status(403).json({
                message: "Unauthorized"
            })
        
        }

    } catch (error) {
        console.error(error);
        console.log("MIDDLEWARE PROBLEM");
        return res.status(401).json(
            {
                error: "Invalid Or Expired Token"
            }
        )
    }
}