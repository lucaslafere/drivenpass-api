import { Request, Response, NextFunction} from 'express';

interface iError {
    type: string;
    message: string;
    code: number;
}

export default function errorHandlerMiddleware  (err: iError, req: Request, res: Response, next: NextFunction) {
    console.log(err)
    if (err.type){
        return res.status(err.code).send(err.message);
    }
    return res.status(500).send("Untracked error");
}