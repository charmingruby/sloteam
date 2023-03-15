import { Request, Response, Router } from 'express';

const projectsRouter = Router();

// Get all projects
projectsRouter.get('/projects', (req: Request, res: Response) =>
  res.json({ ok: 'Get all project' })
);

// Create project
projectsRouter.post('/projects', (req: Request, res: Response) =>
  res.json({ ok: 'Create project' })
);

// Edit project
projectsRouter.put('/projects/:id', (req: Request, res: Response) =>
  res.json({ ok: 'Edit project' })
);

// Get project
projectsRouter.get('/projects/:id', (req: Request, res: Response) =>
  res.json({ ok: 'Get project' })
);

// Delete project
projectsRouter.delete('/projects/:id', (req: Request, res: Response) =>
  res.json({ ok: 'Delete project' })
);

// Change Status
projectsRouter.patch('/projects/:id', (req: Request, res: Response) =>
  res.json({ ok: 'Edit project status' })
);

// Add/Remove technologies
projectsRouter.patch('/projects/:id/technologies/:id', (req: Request, res: Response) =>
  res.json({ ok: 'Remove tech' })
);

projectsRouter.post('/projects/:id/technologies', (req: Request, res: Response) =>
  res.json({ ok: 'Add tech' })
);

// Add/Remove developer
projectsRouter.patch('/projects/:id/developers/:id', (req: Request, res: Response) =>
  res.json({ ok: 'Remove developer' })
);

projectsRouter.post('/projects/:id/developers', (req: Request, res: Response) =>
  res.json({ ok: 'Add developer' })
);

export default projectsRouter;
