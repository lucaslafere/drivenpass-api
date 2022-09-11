import Cryptr from 'cryptr';

const CRYPTR_KEY: string = process.env.CRYPTR_KEY || "placeholder-key";

const cryptr = new Cryptr(CRYPTR_KEY);

export function encryptData (data: string){
    return cryptr.encrypt(data);
}

export function decryptData (data: string){
    return cryptr.decrypt(data);
}