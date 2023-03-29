import { Request, Response } from 'express';
import RemoveDeveloperFromRoleUseCase from '../../useCases/RemoveDeveloperFromRoleUseCase';

class RemoveDeveloperFromRoleController {
  async handle(req: Request, res: Response) {
    const { roleId } = req.params;
    const { developerId } = req.body;

    const removedDeveloper = await RemoveDeveloperFromRoleUseCase.execute({ roleId, developerId });

    return res.json(removedDeveloper);
  }
}

export default new RemoveDeveloperFromRoleController();
