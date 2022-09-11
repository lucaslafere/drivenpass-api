import { Router } from 'express';
import userRouter from './userRoutes';

const router = Router();
router.use(userRouter);

export default router;