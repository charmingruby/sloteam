import express, { Application } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import 'express-async-errors';
import { errorHandler } from '../shared/errors/errorHandler';

import swaggerUI from 'swagger-ui-express';
import swaggerDocument from '../../swagger.json';

import UserRoutes from '../modules/users/infra/http/routes';
import RolesRoutes from '../modules/roles/infra/http/routes';
import DevelopersRoutes from '../modules/developers/infra/http/routes';
import TechnologiesRoutes from '../modules/technologies/infra/http/routes';
import ProjectsRoutes from '../modules/projects/infra/http/routes';

export const app: Application = express();
app.use(express.json());
dotenv.config();
app.use(cors());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use(UserRoutes);
app.use(RolesRoutes);
app.use(DevelopersRoutes);
app.use(TechnologiesRoutes);
app.use(ProjectsRoutes);

app.use(errorHandler);
