import { hashSync, compareSync } from "bcrypt";
import dotenv from 'dotenv';

dotenv.config();

const hash: number = Number(process.env.PASSWORD_HASH) || 12;

export function hashPassword(password: string){
    return hashSync(password, hash);
}

export function comparePassword(password: string, encryptedPassword: string): boolean {
    return compareSync(password, encryptedPassword);
}