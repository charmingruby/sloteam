import { Router } from 'express';
import { isAuthenticated } from '../../../../../shared/infra/http//middlewares/isAuthenticated';
import multer from 'multer';
import uploadConfig from '../../../../../config/multer';

import CreateDeveloperController from '../controllers/CreateDeveloper.controller';
import ListDevelopersController from '../controllers/ListDevelopers.controller';
import DeveloperDetailsController from '../controllers/DeveloperDetails.controller';
import UpdateDeveloperController from '../controllers/UpdateDeveloper.controller';
import DeleteDeveloperController from '../controllers/DeleteDeveloper.controller';

const developersRouter = Router();

const upload = multer(uploadConfig.upload('./developers'));

developersRouter.get('/developers', isAuthenticated, ListDevelopersController.handle);
developersRouter.get('/developers/:id', isAuthenticated, DeveloperDetailsController.handle);
developersRouter.post('/developers', isAuthenticated, upload.single('file'), CreateDeveloperController.handle);
developersRouter.put('/developers/:id', isAuthenticated, upload.single('file'), UpdateDeveloperController.handle);
developersRouter.delete('/developers/:id', isAuthenticated, DeleteDeveloperController.handle);

export default developersRouter;
