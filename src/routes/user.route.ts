import { getAllUsers, createUser, updateUser, deleteUser, registerUser, login, getOneUser } from '../controllers/user.controller';
import express from 'express'
let router = express.Router()

//read
router.get('/', getAllUsers);

// read one user 
router.get('/:id', getOneUser);

//create
router.post('/', createUser);

router.post('/create', registerUser);

router.post('/login', login);

//update
router.put('/:id', updateUser); 

//delete
router.delete('/:id', deleteUser); 

export default router;