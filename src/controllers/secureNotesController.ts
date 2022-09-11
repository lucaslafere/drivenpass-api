import { Request, Response } from "express";
import * as secureNotesService from '../services/secureNotesService';
import { SecureNotesData } from '../types/secureNotesType';
import { secureNotesSchema} from '../schemas/secureNotesSchema';

export async function createSecureNote (req: Request, res: Response) {
    const secureNotes: Omit<SecureNotesData, "userId"> = req.body;
    const { error } = secureNotesSchema.validate(secureNotes);
    if (error) throw {type: 'wrong-body-format', message: error.message, code: 400};
    const { userId } = res.locals;
    await secureNotesService.insert(secureNotes, userId);
    return res.status(201).send("Created")
}

export async function getAllNotes (req: Request, res: Response) {
    const {userId} = res.locals
    const result = await secureNotesService.findAll(userId);
    return res.status(200).send(result);
}
export async function getNoteById (req: Request, res: Response) {
    const {userId} = res.locals
    const secureNoteId = Number(req.params.secureNoteId);
    const result = await secureNotesService.findById(secureNoteId, userId);
    return res.status(200).send(result);
}
export async function deleteNoteById (req: Request, res: Response) {
    const {userId} = res.locals
    const secureNoteId = Number(req.params.secureNoteId);
    await secureNotesService.deleteById(secureNoteId, userId)
    return res.status(200).send("Deleted");
}
