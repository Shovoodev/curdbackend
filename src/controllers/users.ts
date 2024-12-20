import express from 'express'

import { deleteUserById, getUserById, getUsers } from '../db/users'

export const getAllUsers = async(req: express.Request , res: express.Response) : Promise<any> => {
    try {
        const users = await getUsers()
        return res.status(200).json(users).end()
    }
    catch(error){
        console.log(error);
        res.sendStatus(400)
        
    }
}

export const deleteUser = async(req: express.Request , res : express.Response) : Promise<any> => {
    try{
        const { id} = req.params

        const deletedUser = await deleteUserById(id)
        if(res.headersSent !== true){
        return res.sendStatus(200).json(deletedUser)
        }
    }catch(error) {
        console.log(error);
        return res.sendStatus(400)
        
    }
}

export const updateUser = async(req: express.Request , res : express.Response) : Promise<any> => {

    try {
        const {username} = req.body
        const {id} = req.params

        const user = await getUserById(id)
        user.username = username
        await user.save()
        return res.status(200).json(user).end()
    } catch (error) {
        console.log(error);
        return res.sendStatus(400)
    }
}