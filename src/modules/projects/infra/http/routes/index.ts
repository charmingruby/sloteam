import { Router } from 'express';
import multer from 'multer';
import uploadConfig from '../../../../../config/multer';
import { isAuthenticated } from '../../../../../shared/infra/http//middlewares/isAuthenticated';

import CreateProjectController from '../controllers/CreateProject.controller';
import ListProjectsController from '../controllers/ListProjects.controller';
import ProjectDetailsController from '../controllers/ProjectDetails.controller';
import DeleteProjectController from '../controllers/DeleteProject.controller';
import UpdateProjectController from '../controllers/UpdateProject.controller';
import UpdateProjectStatusController from '../controllers/UpdateProjectStatus.controller';
import AddTechnologyToProjectController from '../controllers/AddTechnologyToProject.controller';
import RemoveTechnologyFromProjectController from '../controllers/RemoveTechnologyFromProject.controller';
import AddDeveloperToProjectController from '../controllers/AddDeveloperToProject.controller';
import RemoveDeveloperFromProjectController from '../controllers/RemoveDeveloperFromProject.controller';

const projectsRouter = Router();

const upload = multer(uploadConfig.upload('./projects'));

projectsRouter.get('/projects', isAuthenticated, ListProjectsController.handle);
projectsRouter.get('/projects/:id', isAuthenticated, ProjectDetailsController.handle);
projectsRouter.post('/projects', isAuthenticated, upload.single('file'), CreateProjectController.handle);
projectsRouter.put('/projects/:id', isAuthenticated, upload.single('file'), UpdateProjectController.handle);
projectsRouter.delete('/projects/:id', isAuthenticated, DeleteProjectController.handle);

projectsRouter.patch('/projects/:id', isAuthenticated, UpdateProjectStatusController.handle);

projectsRouter.post('/projects/technologies/:id', isAuthenticated, AddTechnologyToProjectController.handle);
projectsRouter.delete('/projects/technologies/:id', isAuthenticated, RemoveTechnologyFromProjectController.handle);

projectsRouter.post('/projects/developers/:id', isAuthenticated, AddDeveloperToProjectController.handle);
projectsRouter.delete('/projects/developers/:id', isAuthenticated, RemoveDeveloperFromProjectController.handle);

export default projectsRouter;
