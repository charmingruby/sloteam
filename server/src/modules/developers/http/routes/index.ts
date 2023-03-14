import { Request, Response, Router } from 'express';

const developersRouter = Router();

developersRouter.get('/', (req: Request, res: Response) => {
  return res.json({ ok: true });
});

export default developersRouter;
