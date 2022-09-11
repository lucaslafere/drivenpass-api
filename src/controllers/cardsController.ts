import { Request, Response} from 'express';
import * as cardsService from '../services/cardsService';
import { CardsData } from '../types/cardsType';
import { cardSchema } from '../schemas/cardsSchema';

export async function createCard (req: Request, res: Response) {
    const cardDetails: Omit<CardsData, "userId"> = req.body;
    const { error } = cardSchema.validate(cardDetails);
    if (error) throw {type: 'wrong-body-format', message: error.message, code: 400};
    const { userId } = res.locals;
    await cardsService.insert(cardDetails, userId);
    return res.status(201).send("Created");
}

export async function getAllCards (req: Request, res: Response) {
    const { userId } = res.locals;
    const result = await cardsService.findAll(userId);
    return res.status(200).send(result);
}
export async function getCardById (req: Request, res: Response) {
    const { userId } = res.locals;
    const cardId = Number(req.params.cardId)
    const result = await cardsService.findById(cardId, userId);
    return res.status(200).send(result);
}
export async function deleteCard (req: Request, res: Response) {
    const { userId } = res.locals;
    const cardId = Number(req.params.cardId)
    const result = await cardsService.deletebyId(cardId, userId);
    return res.status(200).send(result);
}