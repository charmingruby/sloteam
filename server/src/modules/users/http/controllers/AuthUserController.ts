import { Request, Response } from 'express';
import AuthUserUseCase from '../../useCases/AuthUserUseCase';

class AuthUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const user = await AuthUserUseCase.execute({ email, password });
    return res.json(user);
  }
}

export default new AuthUserController();
