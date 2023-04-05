import { Router } from 'express';

import CreateDeveloperController from '../controllers/CreateDeveloperController';

import multer from 'multer';
import uploadConfig from '../../../../libs/multer';
import ListDevelopersController from '../controllers/ListDevelopersController';
import { isAuthenticated } from '../../../../middlewares/isAuthenticated';
import DeveloperDetailsController from '../controllers/DeveloperDetailsController';
import UpdateDeveloperController from '../controllers/UpdateDeveloperController';
import DeleteDeveloperController from '../controllers/DeleteDeveloperController';

const developersRouter = Router();

const upload = multer(uploadConfig.upload('./developers'));

developersRouter.get('/developers', isAuthenticated, ListDevelopersController.handle);
developersRouter.get('/developers/:id', isAuthenticated, DeveloperDetailsController.handle);
developersRouter.post('/developers', isAuthenticated, upload.single('file'), CreateDeveloperController.handle);
developersRouter.put('/developers/:id', isAuthenticated, upload.single('file'), UpdateDeveloperController.handle);
developersRouter.delete('/developers/:id', isAuthenticated, DeleteDeveloperController.handle);

export default developersRouter;
