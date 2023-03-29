import { Router } from 'express';
import { isAuthenticated } from '../../../../middlewares/isAuthenticated';

import CreateRoleController from '../controllers/CreateRoleController';
import DeleteRoleController from '../controllers/DeleteRoleController';
import ListRolesController from '../controllers/ListRolesController';
import RemoveDeveloperFromRoleController from '../controllers/RemoveDeveloperFromRoleController';
import RoleDetailsController from '../controllers/RoleDetailsController';
import UpdateRoleController from '../controllers/UpdateRoleController';
import AddDeveloperToRoleController from '../controllers/AddDeveloperToRoleController';

const rolesRouter = Router();

rolesRouter.post('/roles', isAuthenticated, CreateRoleController.handle);
rolesRouter.get('/roles', isAuthenticated, ListRolesController.handle);
rolesRouter.put('/roles/:roleId', isAuthenticated, UpdateRoleController.handle);
rolesRouter.get('/roles/:roleId', isAuthenticated, RoleDetailsController.handle);
rolesRouter.delete('/roles/:roleId', isAuthenticated, DeleteRoleController.handle);

rolesRouter.post('/roles/:roleId/add-developer', isAuthenticated, AddDeveloperToRoleController.handle);
rolesRouter.delete('/roles/:roleId/remove-developer', isAuthenticated, RemoveDeveloperFromRoleController.handle);

export default rolesRouter;
