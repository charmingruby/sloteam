import { Request, Response, Router } from 'express';

import CreateDeveloperController from '../controllers/CreateDeveloperController';

import multer from 'multer';
import uploadConfig from '../../../../libs/multer';
import ListDevelopersController from '../controllers/ListDevelopersController';
import { isAuthenticated } from '../../../../middlewares/isAuthenticated';
import DeveloperDetailsController from '../controllers/DeveloperDetailsController';

const developersRouter = Router();

const upload = multer(uploadConfig.upload('./developers'));

developersRouter.get('/developers', isAuthenticated, ListDevelopersController.handle);

developersRouter.get('/developers/:id', isAuthenticated, DeveloperDetailsController.handle);

developersRouter.post('/developers', upload.single('file'), CreateDeveloperController.handle);

developersRouter.delete('/developers/:id', (req: Request, res: Response) => {
  return res.json({ ok: 'Remove one developer' });
});

developersRouter.put('/developer/:id', (req: Request, res: Response) => {
  return res.json({ ok: 'Edit one developer' });
});

export default developersRouter;
