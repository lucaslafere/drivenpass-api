import { Request, Response, NextFunction} from 'express';
import * as usersRepository from '../repositories/usersRepository';
import * as manipulateToken from '../utils/manipulateToken';

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    if (!token) throw {type: 'bad-request', message: "no token found in authorization headers", code: 400};
    const userData: any = manipulateToken.decryptToken(token);
    const findExistingUser = await usersRepository.findByEmail(userData.email);
    if (!findExistingUser) throw {type: 'not-found', message: "user not found", code: 404};
    res.locals.userId = userData.id;
    next();
}