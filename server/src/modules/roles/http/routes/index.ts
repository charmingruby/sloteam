import { Router } from 'express';

import CreateRoleController from '../controllers/CreateRoleController';
import DeleteRoleController from '../controllers/DeleteRoleController';
import ListRolesController from '../controllers/ListRolesController';
import RoleDetailsController from '../controllers/RoleDetailsController';
import UpdateRoleController from '../controllers/UpdateRoleController';

const rolesRouter = Router();

rolesRouter.post('/roles', CreateRoleController.handle);
rolesRouter.get('/roles', ListRolesController.handle);
rolesRouter.put('/roles/:roleId', UpdateRoleController.handle);
rolesRouter.get('/roles/:roleId', RoleDetailsController.handle);
rolesRouter.delete('/roles/:roleId', DeleteRoleController.handle);

rolesRouter.get('/roles/:roleId/developers');

export default rolesRouter;
