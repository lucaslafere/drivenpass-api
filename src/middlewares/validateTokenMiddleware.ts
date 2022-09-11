import { Request, Response, NextFunction} from 'express';

import * as manipulateToken from '../utils/manipulateToken';

export default async function validateToken(req: Request, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.replace("Bearer ", "");
    const userData = manipulateToken.decryptToken(token);


    // res.locals.userId = userData.id;
    next();
}