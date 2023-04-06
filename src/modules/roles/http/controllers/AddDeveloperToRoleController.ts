import { Request, Response } from 'express';
import AddDeveloperToRoleService from '../../services/AddDeveloperToRoleService';

class AddDeveloperToRoleController {
  async handle(req: Request, res: Response) {
    const { id: roleId } = req.params;
    const { developerId } = req.body;

    const developer = await AddDeveloperToRoleService.execute({ roleId, developerId });
    return res.json(developer);
  }
}

export default new AddDeveloperToRoleController();
