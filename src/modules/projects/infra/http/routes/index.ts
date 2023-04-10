import { Request, Response, Router } from 'express';

import multer from 'multer';
import uploadConfig from '../../../../../config/multer';
import { isAuthenticated } from '../../../../../shared/infra/http//middlewares/isAuthenticated';

import CreateProjectController from '../controllers/CreateProject.controller';
import ListProjectsController from '../controllers/ListProjects.controller';
import ProjectDetailsController from '../controllers/ProjectDetails.controller';
import DeleteProjectController from '../controllers/DeleteProject.controller';
import UpdateProjectController from '../controllers/UpdateProject.controller';
import UpdateProjectStatusController from '../controllers/UpdateProjectStatus.controller';

const projectsRouter = Router();

const upload = multer(uploadConfig.upload('./projects'));

projectsRouter.get('/projects', isAuthenticated, ListProjectsController.handle);
projectsRouter.get('/projects/:id', isAuthenticated, ProjectDetailsController.handle);
projectsRouter.post('/projects', isAuthenticated, upload.single('file'), CreateProjectController.handle);
projectsRouter.put('/projects/:id', isAuthenticated, upload.single('file'), UpdateProjectController.handle);
projectsRouter.delete('/projects/:id', isAuthenticated, DeleteProjectController.handle);

projectsRouter.patch('/projects/:id', isAuthenticated, UpdateProjectStatusController.handle);

// Add/Remove technologies
projectsRouter.post('/projects/:id/technologies', (req: Request, res: Response) =>
  res.json({ ok: 'Remove tech' })
);

projectsRouter.delete('/projects/:id/technologies', (req: Request, res: Response) =>
  res.json({ ok: 'Add tech' })
);

// Add/Remove developer
projectsRouter.patch('/projects/:id/developers', (req: Request, res: Response) =>
  res.json({ ok: 'Remove developer' })
);

projectsRouter.post('/projects/:id/developers', );

export default projectsRouter;
