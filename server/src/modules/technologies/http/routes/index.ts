import { Request, Response, Router } from 'express';

const technologiesRouter = Router();

// Get all projects
technologiesRouter.get('/technologies', (req: Request, res: Response) =>
  res.json({ ok: 'Get all technology' })
);

// Create technology
technologiesRouter.post('/technologies', (req: Request, res: Response) =>
  res.json({ ok: 'Create technology' })
);

// Edit technology
technologiesRouter.put('/technologies/:id', (req: Request, res: Response) =>
  res.json({ ok: 'Edit technology' })
);

// Get technology
technologiesRouter.get('/technologies/:id', (req: Request, res: Response) =>
  res.json({ ok: 'Get technology' })
);

// Delete technology
technologiesRouter.delete('/technologies/:id', (req: Request, res: Response) =>
  res.json({ ok: 'Delete technology' })
);

export default technologiesRouter;
