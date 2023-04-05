import { Router } from 'express';
import { isAuthenticated } from '../../../../middlewares/isAuthenticated';

import CreateTechnologyController from '../controllers/CreateTechnologyController';
import TechnologyDetailsController from '../controllers/TechnologyDetailsController';
import ListTechnologiesController from '../controllers/ListTechnologiesController';
import DeleteTechnologyController from '../controllers/DeleteTechnologyController';
import UpdateTechnologyController from '../controllers/UpdateTechnologyController';

const technologiesRouter = Router();

technologiesRouter.get('/technologies', isAuthenticated, ListTechnologiesController.handle);
technologiesRouter.post('/technologies', isAuthenticated, CreateTechnologyController.handle);
technologiesRouter.put('/technologies/:id', isAuthenticated, UpdateTechnologyController.handle);
technologiesRouter.get('/technologies/:id', isAuthenticated, TechnologyDetailsController.handle);
technologiesRouter.delete('/technologies/:id', isAuthenticated, DeleteTechnologyController.handle);

export default technologiesRouter;
