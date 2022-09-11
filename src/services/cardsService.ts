import * as cardsRepository from "../repositories/cardsRepository";
import * as dataEncrypter from "../utils/dataEncrypter";
import { CardsData } from "../types/cardsType";

export async function insert(
  cardDetails: Omit<CardsData, "userId">,
  userId: number
) {
  const findAllCards = await cardsRepository.findAll(userId);
  if (findAllCards.some((note) => note.label === cardDetails.label))
    throw { type: "conflict", message: "no repeated labels", code: 400 };
  const result = await cardsRepository.insert({
    ...cardDetails,
    userId,
    securityCode: dataEncrypter.encryptData(cardDetails.securityCode),
    password: dataEncrypter.encryptData(cardDetails.password),
  });
  return result;
}

export async function findAll(userId: number) {
  const findUserData = await cardsRepository.findAll(userId);
  const decryptedData = findUserData.map((el) => {
    return {
      ...el,
      password: dataEncrypter.decryptData(el.password),
      securityCode: dataEncrypter.decryptData(el.securityCode),
    };
  });
  return decryptedData;
}

export async function findById(id: number, userId: number) {
  const cardDetails = await cardsRepository.findById(id);
  if (!cardDetails)
    throw {
      type: "not-found",
      message: "no cards found with this id",
      code: 404,
    };
  if (cardDetails.userId !== userId)
    throw { type: "unauthorized", message: "You can't do this", code: 401 };
  return {
    ...cardDetails,
    password: dataEncrypter.decryptData(cardDetails.password),
    securityCode: dataEncrypter.decryptData(cardDetails.securityCode),
  };
}

export async function deletebyId (id: number, userId: number){
    const cardDetails = await cardsRepository.findById(id);
    if (!cardDetails)
    throw {
      type: "not-found",
      message: "no cards found with this id",
      code: 404,
    };
  if (cardDetails.userId !== userId)
    throw { type: "unauthorized", message: "You can't do this", code: 401 };
    await cardsRepository.deleteById(id);
}
