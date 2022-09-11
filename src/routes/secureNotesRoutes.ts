import { Router } from 'express';
import validateToken from '../middlewares/validateTokenMiddleware';
import * as secureNotesController from '../controllers/secureNotesController';

const secureNotesRouter = Router();
secureNotesRouter.post("/secure-note", validateToken, secureNotesController.createSecureNote);
secureNotesRouter.get("/secure-note", validateToken, secureNotesController.getAllNotes);
secureNotesRouter.get("/secure-note/:secureNoteId", validateToken, secureNotesController.getNoteById);
secureNotesRouter.delete("/secure-note/:secureNoteId", validateToken, secureNotesController.deleteNoteById);

export default secureNotesRouter