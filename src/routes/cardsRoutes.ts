import { Router } from 'express';
import validateToken from '../middlewares/validateTokenMiddleware';
import * as cardsController from '../controllers/cardsController';

const cardsRouter = Router();
cardsRouter.post("/cards", validateToken, cardsController.createCard)
cardsRouter.get("/cards", validateToken, cardsController.getAllCards);
cardsRouter.get("/cards/:cardId", validateToken, cardsController.getCardById)
cardsRouter.delete("/cards/:cardId", validateToken, cardsController.deleteCard)

export default cardsRouter;