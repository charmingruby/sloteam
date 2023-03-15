import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { errorHandler } from './middlewares/errorHandler';

import UserRoutes from './modules/users/http/routes';
import DevelopersRoutes from './modules/developers/http/routes';
import TechnologiesRoutes from './modules/technologies/http/routes';
import ProjectsRoutes from './modules/projects/http/routes';

const app: Application = express();

dotenv.config();
app.use(express.json());
app.use(cors);

app.use(UserRoutes);
app.use(DevelopersRoutes);
app.use(TechnologiesRoutes);
app.use(ProjectsRoutes);

app.use(errorHandler);

const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => console.log(`📦 Server is running on http://localhost:${SERVER_PORT}`));

