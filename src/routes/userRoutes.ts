import { Router } from 'express';
import * as usersController from '../controllers/usersController';

const userRouter = Router();

userRouter.post('/sign-up', usersController.createUser);
userRouter.post('/sign-in', usersController.login);

export default userRouter;
