import { Request, Response, NextFunction} from 'express';

interface iError {
    code: number;
    message: string;
}

export default function errorHandlerMiddleware  (err: iError, req: Request, res: Response, next: NextFunction) {
    console.log(err)
    if (err.code){
        return res.status(err.code).send(err.message);
    }
    return res.status(500).send("Untracked error");
}