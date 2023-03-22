import { Request, Response, Router } from 'express';

const developersRouter = Router();

developersRouter.get('/developers', (req: Request, res: Response) => {
  return res.json({ ok: 'Get all developers' });
});

developersRouter.get('/developers/:id', (req: Request, res: Response) => {
  return res.json({ ok: 'Get one developer' });
});

developersRouter.post('/developers', (req: Request, res: Response) => {
  return res.json({ ok: 'Create one developer' });
});

developersRouter.delete('/developers/:id', (req: Request, res: Response) => {
  return res.json({ ok: 'Remove one developer' });
});

developersRouter.put('/developer/:id', (req: Request, res: Response) => {
  return res.json({ ok: 'Edit one developer' });
});

developersRouter.post('/developers/:id/technologies', (req: Request, res: Response) => {
  return res.json({ ok: 'Add techs' });
});

export default developersRouter;
