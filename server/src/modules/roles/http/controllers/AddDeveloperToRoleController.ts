import { Request, Response } from 'express';
import AddDeveloperToRoleUseCase from '../../useCases/AddDeveloperToRoleUseCase';

class AddDeveloperToRoleController {
  async handle(req: Request, res: Response) {
    const { roleId } = req.params;
    const { developerId } = req.body;

    const developer = await AddDeveloperToRoleUseCase.execute({ roleId, developerId });
    return res.json(developer);
  }
}

export default new AddDeveloperToRoleController();
