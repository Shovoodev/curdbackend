import express from "express";
import { createUser, getUserByEmail } from "../db/users";
import { authentication, random } from "../helpers";


export const login = async(req: express.Request , res : express.Response) : Promise<any> => {
    try{
        const {email , password} = req.body;

        if(!email || !password){
            return res.sendStatus(400)
        }
        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password')// buji nai 

        if(!user) {
            return res.sendStatus(400)
        }
        const expectdHash = authentication(user.authentication.salt , password) // have to understand this

        if(user.authentication.password !== expectdHash ){
            return res.sendStatus(403)
        }
        const salt = random();
        user.authentication.sessionToken = authentication(salt , user._id.toString())//buji nai 
        await user.save()
            res.cookie("VIDEO", user.authentication.sessionToken , {domain :'localhost' , path: '/'})
            return res.sendStatus(200).json(user)
        
    }
    catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const register = async( req : express.Request , res : express.Response) : Promise<any> =>{  // in new update i have to use : <Promise<any> to run this script otherwise it will always cause this error 
    try{
        const {email , password , username} = req.body;

        if(!email || !password || !username){
            return res.sendStatus(400)
        }
        const existingUser = await getUserByEmail(email)
        if(existingUser){
            return res.sendStatus(400)
        }
        const salt = random()
        const user = await createUser({
            email , 
            username , 
            authentication : {
                salt , 
                password : authentication(salt , password)
            }
        })
        return res.status(200).json(user).end()
    }
    catch( error) {
        console.log(error)
        return res.sendStatus(400)
    }
}