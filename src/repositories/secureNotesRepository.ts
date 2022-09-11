import { prismaConnection } from '../db/database';
import { SecureNotesData} from '../types/secureNotesType';

export async function insert (secureNotes: SecureNotesData){
    const result = await prismaConnection.secureNotes.create({data: secureNotes})
    return result;
}

export async function findAll (userId: number) {
    const result = await prismaConnection.secureNotes.findMany({where: {userId}});
    return result;
}
export async function findById (id: number){
    const result = await prismaConnection.secureNotes.findUnique({where: {id}});
    return result;
}
export async function deleteById (id: number){
    const result = await prismaConnection.secureNotes.delete({where: {id}});
    return result;
}