import express, { Application } from 'express';
import dotenv from 'dotenv';
import DevelopersRoutes from './modules/developers/http/routes';

dotenv.config();
const app: Application = express();

app.use(express.json());

app.use(DevelopersRoutes);

const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => console.log(`📦 Server is running on http://localhost:${SERVER_PORT}`));

