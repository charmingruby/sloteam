import { Request, Response, Router } from 'express';

import multer from 'multer';
import uploadConfig from '../../../../libs/multer';

import { isAuthenticated } from '../../../../middlewares/isAuthenticated';

import CreateUserController from '../controllers/CreateUserController';
import AuthUserController from '../controllers/AuthUserController';

const usersRouter = Router();

const upload = multer(uploadConfig.upload('./users'));

usersRouter.post('/users', upload.single('file'), CreateUserController.handle);

usersRouter.post('/session', AuthUserController.handle);

usersRouter.get('/me', (req: Request, res: Response) => {
  return res.json({ ok: 'Get user' });
});

export default usersRouter;
