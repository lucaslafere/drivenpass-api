import { prismaConnection } from "../db/database";
import { CardsData } from "../types/cardsType";

export async function insert (cardDetails: CardsData) {
    const result = await prismaConnection.cards.create({data: cardDetails});
    return result
}
export async function findAll (userId: number) {
    const result = await prismaConnection.cards.findMany({where: {userId}});
    return result
}
export async function findById(id: number) {
    const result = await prismaConnection.cards.findUnique({where: {id}});
    return result
}
export async function deleteById (id: number) {
    const result = await prismaConnection.cards.delete({where: {id}});
    return result
}