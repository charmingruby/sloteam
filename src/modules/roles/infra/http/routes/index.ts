import { Router } from 'express';
import { isAuthenticated } from '../../../../../shared/infra/http//middlewares/isAuthenticated';

import CreateRoleController from '../controllers/CreateRole.controller';
import DeleteRoleController from '../controllers/DeleteRole.controller';
import ListRolesController from '../controllers/ListRoles.controller';
import RemoveDeveloperFromRoleController from '../controllers/RemoveDeveloperFromRole.controller';
import RoleDetailsController from '../controllers/RoleDetails.controller';
import UpdateRoleController from '../controllers/UpdateRole.controller';
import AddDeveloperToRoleController from '../controllers/AddDeveloperToRole.controller';

const rolesRouter = Router();

rolesRouter.post('/roles', isAuthenticated, CreateRoleController.handle);
rolesRouter.get('/roles', isAuthenticated, ListRolesController.handle);
rolesRouter.put('/roles/:id', isAuthenticated, UpdateRoleController.handle);
rolesRouter.get('/roles/:id', isAuthenticated, RoleDetailsController.handle);
rolesRouter.delete('/roles/:id', isAuthenticated, DeleteRoleController.handle);

rolesRouter.post('/roles/developers/:id', isAuthenticated, AddDeveloperToRoleController.handle);
rolesRouter.delete('/roles/developers/:id', isAuthenticated, RemoveDeveloperFromRoleController.handle);

export default rolesRouter;
