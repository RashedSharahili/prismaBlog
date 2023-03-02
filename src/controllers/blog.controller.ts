import { prisma } from '../config/db';
import {Request, Response} from 'express';

// READ
export const getAllBlog = async(req:Request, res:Response) => {

    let blog = await prisma.blog.findMany({
        // include: { user: true }
    });

    try {

        res.json(blog);
        
    } catch(err) {

        res.json(err)
        
    }
    
}

// READ USER BLOG
export const getUserBlog = async(req:Request, res:Response) => {

    const { id } = req.params

    let blog = await prisma.blog.findMany({
        where: {
            userId: id
        }
    });

    try {

        res.json(blog)

    } catch(err) {

        res.json(err)

    }
}

//CREATE
export const createBlog = async(req:Request, res:Response) => {

    try {

        let blog = await prisma.blog.create({
            data: {
                title: req.body.title,
                userId: req.body.userId,
            }
        });
    
        // console.log(`blog created successfully`);
        res.json({"msg": "blog created successfully", "blog":blog});

    } catch(err) {

        // console.log(err);
        res.json(err)
        
    }
    
}

// UPDATE
export const updateBlog = async(req:Request, res:Response) => {

    const { id } = req.params

    try {

        let blog = await prisma.blog.update({
            where: {
                id: id
            },
            data: {
                title: req.body.title,
            }
        });
    
        res.json({"msg": "blog updated successfully", "blog":blog});

    } catch(err) {

        // console.log(err);
        res.json(err)
        
    }
    
}

// DELETE
export const deleteBlog = async(req:Request, res:Response) => {

    const { id } = req.params

    try {

        let blog = await prisma.blog.delete({
            where: {
                id: id
            }
        });

        res.json({"msg": "blog deleted"});

    } catch(err) {

        // console.log(err);
        res.json(err)
        
    }
    
}

// DELETE BLOGS OF USER
export const deleteUserBlog = async(req:Request, res:Response) => {

    const { id } = req.params

    try {

        let blogs = await prisma.blog.deleteMany({
            where: {
                userId: id
            }
        });

        res.json({ message: "user blogs deleted successfully" })

    } catch(err) {

        res.json(err)
    }
}