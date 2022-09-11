import { Router } from 'express';
import userRouter from './userRoutes';
import credentialsRouter from './credentialsRoutes';


const router = Router();
router.use(userRouter);
router.use(credentialsRouter);
export default router;