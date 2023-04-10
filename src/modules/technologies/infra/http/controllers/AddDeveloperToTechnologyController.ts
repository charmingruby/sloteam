import { Request, Response } from 'express';
import AddDeveloperToTechnologyService from '../../../services/AddDeveloperToTechnologyService';

class AddDeveloperToTechnologyController {
  async handle(req: Request, res: Response) {
    const { id: technologyId } = req.params;
    const { developerId } = req.body;
    const technology = await AddDeveloperToTechnologyService.execute({ technologyId, developerId });
    return res.json(technology);
  }
}

export default new AddDeveloperToTechnologyController();
