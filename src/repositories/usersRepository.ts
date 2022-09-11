import { prismaConnection } from '../db/database';
import { UserData } from '../types/userType';

export async function findAll () {
    const result = await prismaConnection.users.findMany();
    return result
}

export async function findByEmail(email: string) {
    const result = await prismaConnection.users.findUnique({where: {email}});
    return result;
}

export async function insert (userData: UserData) {
    const result = await prismaConnection.users.create({data: userData})
    return result
}