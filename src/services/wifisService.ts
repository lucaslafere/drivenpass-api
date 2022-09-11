import * as wifisRepository from '../repositories/wifisRepository';
import * as dataEncrypter from '../utils/dataEncrypter';
import { WifisData } from '../types/wifisType';

export async function insert (
    wifiDetails: Omit<WifisData, "userId">,
    userId: number
){
    await wifisRepository.insert({
        ...wifiDetails,
        userId,
        password: dataEncrypter.encryptData(wifiDetails.password)
    });
}

export async function findAll (userId: number) {
    const findWifiData = await wifisRepository.findAll(userId);
    const decryptedData = findWifiData.map((wifi) => {
        return {
            ...wifi,
            password: dataEncrypter.decryptData(wifi.password)
        }
    });
    return decryptedData
}

export async function findById (userId: number, wifiId: number) {
    const wifiDetails = await wifisRepository.findById(wifiId);
    if (!wifiDetails)
    throw {
      type: "not-found",
      message: "no wifis found with this id",
      code: 404,
    };
  if (wifiDetails.userId !== userId)
    throw { type: "unauthorized", message: "You can't do this", code: 401 };
    return {
        ...wifiDetails,
        password: dataEncrypter.decryptData(wifiDetails.password)
    }
}
export async function deleteById (userId: number, wifiId: number){
    const wifiDetails = await wifisRepository.findById(wifiId);
    if (!wifiDetails)
    throw {
      type: "not-found",
      message: "no wifis found with this id",
      code: 404,
    };
  if (wifiDetails.userId !== userId)
    throw { type: "unauthorized", message: "You can't do this", code: 401 };
    await wifisRepository.deleteById(wifiId)
}