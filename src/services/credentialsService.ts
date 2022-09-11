import * as credentialsRepository from '../repositories/credentialsRepository';
import * as dataEncrypter from '../utils/dataEncrypter';
import { CredentialsData } from '../types/credentialsType';

export async function insert (credentials: Omit<CredentialsData, "userId">, userId: number){
    const findUserData = await credentialsRepository.findUserCredentials(userId);
    if(findUserData.some(result => result.label === credentials.label) ) throw {type: 'conflict', message: "no repeated labels", code: 400};
    const result = await credentialsRepository.insert({
        ...credentials,
        userId,
        password: dataEncrypter.encryptData(credentials.password)
    });
    return result
}

export async function findAll (userId: number) {
    const findUserData = await credentialsRepository.findUserCredentials(userId);

    const decryptedData = findUserData.map(el => {
        return {...el, password: dataEncrypter.decryptData(el.password)}
    });
    return decryptedData;
}

export async function findById (userId: number, id: number){
    const findCredentialsById = await credentialsRepository.findById(id);
    if (!findCredentialsById) throw {type: "not-found", message: "no credentials found with this id", code: 404};
    if (findCredentialsById.userId !== userId) throw {type: "unauthorized", message: "You can't do this", code: 401};
    return {
        ...findCredentialsById,
        password: dataEncrypter.decryptData(findCredentialsById.password)
    };
}

export async function DeleteById (userId: number, id: number){
    const findCredentialsById = await credentialsRepository.findById(id);
    if (!findCredentialsById) throw {type: "not-found", message: "no credentials found with this id", code: 404};
    if (findCredentialsById.userId !== userId) throw {type: "unauthorized", message: "You can't do this", code: 401};
    await credentialsRepository.deleteById(id);
}