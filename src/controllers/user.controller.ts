import { prisma } from '../config/db';
import {Request, Response} from 'express';
import { User } from '@prisma/client';

// READ
export const getAllUsers = async (req:Request,res:Response)=>{
    let users = await prisma.user.findMany();
    res.json(users);
};

// READ ONE USER
export const getOneUser = async (req:Request, res:Response) => {

    const { id } = req.params

    let user = await prisma.user.findFirst({
        where: {
            id: id
        }
    });

    res.json(user);
}

// CREATE
export const createUser = async (req:Request,res:Response)=>{
    let user = await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        }
    });
    res.json({"msg": "user created", "user":user});
}

// UPDATE
export const updateUser = async (req:Request,res:Response)=>{
    let user = await prisma.user.update({
        where:{
            id: req.params.id
        },
        data:{
            email: req.body.email,
            name: req.body.name
        }
    });

    res.json({"msg": "user updated", "user":user});
}

// DELETE
export const deleteUser = async (req:Request,res:Response)=>{
    let user = await prisma.user.delete({
        where:{
            id: req.params.id
        }
    });
    res.json({"msg": "user deleted", "user":user});
}

export const registerUser = async (req:Request, res:Response) => {

    try {
        
        const user = req.body as User

        await prisma.user.create({
            data: {
                name: user.name,
                username: user.username,
                password: user.password,
                email: user.email
            }
        });

        res.json({ message: "user created succfully" })

    } catch(err) {

        res.json(err)
    }
}

export const login = async (req:Request, res: Response) => {

    const { username, password } = req.body as User
    
    try {

        let user = await prisma.user.findFirst({
            where: {
                username,
                password
            }
        });

        if(!user) {

            res.json({ message: "Invalid Creadintals" });

        } else {

            res.json({ message: `Welcome Back ${username}` });
        }

    } catch(err) {

        res.json(err)
    }
}