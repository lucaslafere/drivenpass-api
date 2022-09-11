import dotenv from 'dotenv';
import cors from 'cors';
import express, {json} from 'express';
import 'express-async-errors';
import errorHandlerMiddleware from './middlewares/errorMiddleware';

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

app.use(errorHandlerMiddleware);


const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => `Servidor rodando na porta ${PORT}`);