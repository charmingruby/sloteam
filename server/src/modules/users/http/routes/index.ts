import { Request, Response, Router } from 'express';

const usersRouter = Router();

usersRouter.post('/users', (req: Request, res: Response) => {
  return res.json({ ok: 'Register user' });
});

usersRouter.post('/session', (req: Request, res: Response) => {
  return res.json({ ok: 'Login user' });
});

usersRouter.get('/me', (req: Request, res: Response) => {
  return res.json({ ok: 'Get user' });
});

export default usersRouter;
