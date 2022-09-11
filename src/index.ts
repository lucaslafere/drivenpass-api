import dotenv from 'dotenv';
import express, {json} from 'express';
import 'express-async-errors';

dotenv.config();

const app = express();
app.use(json());


const PORT = Number(process.env.PORT) || 5000;
app.listen(PORT, () => `Servidor rodando na porta ${PORT}`);