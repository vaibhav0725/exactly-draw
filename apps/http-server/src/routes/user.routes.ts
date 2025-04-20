import {Router} from "express"
import jwt, { JwtPayload } from "jsonwebtoken"
import { JWT_SECRET } from "@repo/server-common/config"
import { middleware } from "../middleware/middleware";
import { CreateUserSchema, SignInSchema } from "@repo/common/types";

export const router:Router=Router();

router.get("/", (req,res) => {
    res.send("LIVE SERVER")
});

router.post("/signup", (req,res) => {
    const data = CreateUserSchema.safeParse(req.body);

    if(!data.success) {
        res.json({
            message:"Incorrect Inputs"
        })
        return;
    }
    
    res.json({
        userId:"123"
    })
});

router.post("/signin", (req,res) => {
    const data = SignInSchema.safeParse(req.body);

    if(!data.success) {
        res.json({
            message:"Incorrect Inputs"
        });
        return;
    }

    const userId=1
    const token=jwt.sign({userId},JWT_SECRET);
    res.json({
        token
    })
});

router.post("/room", middleware , (req,res) => {

});
