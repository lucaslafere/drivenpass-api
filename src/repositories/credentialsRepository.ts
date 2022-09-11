import { prismaConnection } from '../db/database';
import { CredentialsData} from '../types/credentialsType';

export async function findUserCredentials (userId: number){
    const result = await prismaConnection.credentials.findMany({where: {userId}});
    return result;
}

export async function insert (credentials: CredentialsData){
    const result = await prismaConnection.credentials.create({data: credentials});
    return result
}

export async function findAll (userId: number) {
    const result = await prismaConnection.credentials.findMany({where: {userId}});
    return result;
}
export async function findById (id: number){
    const result = await prismaConnection.credentials.findUnique({where: {id}});
    return result;
}
export async function deleteById (id: number){
    const result = await prismaConnection.credentials.delete({where: {id}});
    return result;
}