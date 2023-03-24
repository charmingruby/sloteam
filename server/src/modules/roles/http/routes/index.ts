import { Request, Response, Router } from 'express';

import CreateRoleController from '../controllers/CreateRoleController';

const rolesRouter = Router();

rolesRouter.post('/roles', CreateRoleController.handle);
rolesRouter.get('/roles', (req: Request, res: Response) => res.json({ roles: 'Get all roles' }));
rolesRouter.put('/roles/:roleId', (req: Request, res: Response) => res.json({ roles: 'Edit one role' }));
rolesRouter.get('/roles/:roleId', (req: Request, res: Response) => res.json({ roles: 'Get one role' }));
rolesRouter.delete('/roles/:roleId', (req: Request, res: Response) => res.json({ roles: 'Delete one role' }));

rolesRouter.get('/roles/:roleId/developers');

export default rolesRouter;
