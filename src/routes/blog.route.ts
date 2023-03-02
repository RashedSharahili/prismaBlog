import { getAllBlog, createBlog, updateBlog, deleteBlog, getUserBlog, deleteUserBlog } from '../controllers/blog.controller'
import express from 'express'
let router = express.Router()

//read
router.get('/', getAllBlog);

// read user blog
router.get('/userblog/:id', getUserBlog)

//create
router.post('/', createBlog);

//update
router.put('/:id', updateBlog); 

//delete
router.delete('/:id', deleteBlog); 

// delete user blogs
router.delete('/deleteblogs/:id', deleteUserBlog)

export default router;