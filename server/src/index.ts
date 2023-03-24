import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'express-async-errors';
import { errorHandler } from './middlewares/errorHandler';

import UserRoutes from './modules/users/http/routes';
import RolesRoutes from './modules/roles/http/routes';
import DevelopersRoutes from './modules/developers/http/routes';
import TechnologiesRoutes from './modules/technologies/http/routes';
import ProjectsRoutes from './modules/projects/http/routes';

const app: Application = express();
app.use(express.json());
dotenv.config();
app.use(cors());

app.use(UserRoutes);
app.use(RolesRoutes);
app.use(DevelopersRoutes);
app.use(TechnologiesRoutes);
app.use(ProjectsRoutes);

app.use(errorHandler);

const SERVER_PORT = process.env.SERVER_PORT;
app.listen(SERVER_PORT, () => console.log(`📦 Server is running on http://localhost:${SERVER_PORT}`));

