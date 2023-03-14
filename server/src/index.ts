import express, { Application } from 'express';
import dotenv from 'dotenv';
import { errorHandler } from './middlewares/errorHandler';
import DevelopersRoutes from './modules/developers/http/routes';
import cors from 'cors';

dotenv.config();
const app: Application = express();

app.use(express.json());
app.use(cors);

app.use(DevelopersRoutes);

app.use(errorHandler);


const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => console.log(`📦 Server is running on http://localhost:${SERVER_PORT}`));

