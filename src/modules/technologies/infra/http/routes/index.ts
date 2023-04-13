import { Router } from 'express';
import { isAuthenticated } from '../../../../../shared/infra/http/middlewares/isAuthenticated';

import CreateTechnologyController from '../controllers/CreateTechnology.controller';
import TechnologyDetailsController from '../controllers/TechnologyDetails.controller';
import ListTechnologiesController from '../controllers/ListTechnologies.controller';
import DeleteTechnologyController from '../controllers/DeleteTechnology.controller';
import UpdateTechnologyController from '../controllers/UpdateTechnology.controller';
import AddDeveloperToTechnologyController from '../controllers/AddDeveloperToTechnology.controller';
import RemoveDeveloperFromTechnologyController from '../controllers/RemoveDeveloperFromTechnology.controller';

const technologiesRouter = Router();

technologiesRouter.get('/technologies', isAuthenticated, ListTechnologiesController.handle);
technologiesRouter.post('/technologies', isAuthenticated, CreateTechnologyController.handle);
technologiesRouter.put('/technologies/:id', isAuthenticated, UpdateTechnologyController.handle);
technologiesRouter.get('/technologies/:id', isAuthenticated, TechnologyDetailsController.handle);
technologiesRouter.delete('/technologies/:id', isAuthenticated, DeleteTechnologyController.handle);

technologiesRouter.post('/technologies/developers/:id', isAuthenticated, AddDeveloperToTechnologyController.handle);
technologiesRouter.delete('/technologies/developers/:id', isAuthenticated, RemoveDeveloperFromTechnologyController.handle);

export default technologiesRouter;
