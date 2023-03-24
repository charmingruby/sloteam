import { Request, Response } from 'express';
import CreateRoleUseCase from '../../useCases/CreateRoleUseCase';

class CreateRoleController {
  async handle(req: Request, res: Response) {
    const role = await CreateRoleUseCase.execute();
    return role;
  }
}

export default new CreateRoleController();
