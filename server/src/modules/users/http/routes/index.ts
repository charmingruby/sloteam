import { Router } from 'express';

import multer from 'multer';
import uploadConfig from '../../../../libs/multer';

import CreateUserController from '../controllers/CreateUserController';
import AuthUserController from '../controllers/AuthUserController';

const usersRouter = Router();

const upload = multer(uploadConfig.upload('./users'));

usersRouter.post('/users', upload.single('file'), CreateUserController.handle);
usersRouter.post('/session', AuthUserController.handle);

export default usersRouter;
