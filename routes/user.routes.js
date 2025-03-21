import {Router} from 'express'
import { getAllUsers, getUser}  from '../controller/user.controller.js';
import authorize from '../middleware/auth.middleware.js'

const userRouter = Router();


userRouter.get('/',getAllUsers);

// /user is static parameter everytime we get same result

// /:id means dynamic paramerter everytime we get different user details 
// take id from the db to get the specific user 


// so here authorize is a middleware which will restrict the user to get all other users details

userRouter.get('/:id',getUser);

userRouter.post('/',(req,res)=>{
    res.send({
        message:"CREATE new users"
    })
});


userRouter.put('/:id',(req,res)=>{
    res.send({
        message:"UPDATE data of users by id"
    })
});


userRouter.delete('/',(req,res)=>{
    res.send({
        message:"DELETE a users"
    })
});

export default userRouter;