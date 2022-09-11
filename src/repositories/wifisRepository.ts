import { prismaConnection } from '../db/database';
import { WifisData } from '../types/wifisType';

export async function insert (wifiDetails: WifisData) {
    const result = await prismaConnection.wifis.create({data: wifiDetails});
    return result
}

export async function findAll (userId: number) {
    const result = await prismaConnection.wifis.findMany({
        where: {userId}
    });
    return result
}
export async function findById (id: number){
    const result = await prismaConnection.wifis.findUnique({where: {id}})
    return result
}
export async function deleteById (id: number){
    const result = await prismaConnection.wifis.delete({where: {id}})
    return result
}