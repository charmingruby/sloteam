import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../../../../config/multer';

import CreateUserController from '../controllers/CreateUser.controller';
import AuthUserController from '../controllers/AuthUser.controller';

const usersRouter = Router();

const upload = multer(uploadConfig.upload('./users'));

usersRouter.post('/users', upload.single('file'), CreateUserController.handle);
usersRouter.post('/session', AuthUserController.handle);

export default usersRouter;
