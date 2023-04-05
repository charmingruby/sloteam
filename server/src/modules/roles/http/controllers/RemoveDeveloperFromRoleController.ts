import { Request, Response } from 'express';
import RemoveDeveloperFromRoleService from '../../services/RemoveDeveloperFromRoleService';

class RemoveDeveloperFromRoleController {
  async handle(req: Request, res: Response) {
    const { id: roleId } = req.params;
    const { developerId } = req.body;

    const removedDeveloper = await RemoveDeveloperFromRoleService.execute({ roleId, developerId });

    return res.json(removedDeveloper);
  }
}

export default new RemoveDeveloperFromRoleController();
