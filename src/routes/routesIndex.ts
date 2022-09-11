import { Router } from 'express';
import userRouter from './userRoutes';
import credentialsRouter from './credentialsRoutes';
import secureNotesRouter from './secureNotesRoutes';
import cardRouter from './cardsRoutes';


const router = Router();
router.use(userRouter);
router.use(credentialsRouter);
router.use(secureNotesRouter);
router.use(cardRouter);
export default router;