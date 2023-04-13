import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'express-async-errors';
import { errorHandler } from '../shared/errors/errorHandler';

import UserRoutes from '../modules/users/infra/http/routes';
import RolesRoutes from '../modules/roles/infra/http/routes';
import DevelopersRoutes from '../modules/developers/infra/http/routes';
import TechnologiesRoutes from '../modules/technologies/infra/http/routes';
import ProjectsRoutes from '../modules/projects/infra/http/routes';

export const app: Application = express();
app.use(express.json());
dotenv.config();
app.use(cors());

app.use('/v1', UserRoutes);
app.use('/v1',RolesRoutes);
app.use('/v1',DevelopersRoutes);
app.use('/v1',TechnologiesRoutes);
app.use('/v1',ProjectsRoutes);

app.use(errorHandler);
