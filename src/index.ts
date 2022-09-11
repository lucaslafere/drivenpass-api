import dotenv from 'dotenv';
import cors from 'cors';
import express, {json} from 'express';
import 'express-async-errors';
import errorHandlerMiddleware from './middlewares/errorMiddleware';
import router from './routes/routesIndex';

dotenv.config();

const app = express();
app.use(cors());
app.use(json());
app.use(router);
app.use(errorHandlerMiddleware);


const PORT = Number(process.env.PORT) || 4000;
app.listen(PORT, () => `Servidor rodando na porta ${PORT}`);