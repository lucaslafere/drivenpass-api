import { Router } from 'express';
import userRouter from './userRoutes';
import credentialsRouter from './credentialsRoutes';
import secureNotesRouter from './secureNotesRoutes'


const router = Router();
router.use(userRouter);
router.use(credentialsRouter);
router.use(secureNotesRouter);
export default router;