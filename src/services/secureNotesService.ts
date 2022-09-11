import * as secureNotesRepository from '../repositories/secureNotesRepository';
import { SecureNotesData } from '../types/secureNotesType';

export async function insert (secureNotes: Omit<SecureNotesData, "userId">, userId: number){
    const findAllNotes = await secureNotesRepository.findAll(userId);

    if(findAllNotes.some(note => note.title === secureNotes.title)) throw {type: 'conflict', message: "no repeated titles", code: 400};
    const result = await secureNotesRepository.insert({
        ...secureNotes,
        userId,
    })
    return result
}

export async function findAll (userId: number){
    const result = await secureNotesRepository.findAll(userId);
    return result;
}
export async function findById (secureNoteId: number, userId: number){
    const findNoteById = await secureNotesRepository.findById(secureNoteId);
    if (!findNoteById) throw {type: "not-found", message: "no secure note found with this id", code: 404};
    if (findNoteById.userId !== userId) throw {type: "unauthorized", message: "You can't do this", code: 401};
    return findNoteById;
}
export async function deleteById (secureNoteId: number, userId: number){
    const findNoteById = await secureNotesRepository.findById(secureNoteId);
    if (!findNoteById) throw {type: "not-found", message: "no secure note found with this id", code: 404};
    if (findNoteById.userId !== userId) throw {type: "unauthorized", message: "You can't do this", code: 401};
    await secureNotesRepository.deleteById(secureNoteId);
}