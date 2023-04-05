import { Request, Response } from 'express';
import DeveloperDetailsService from '../../services/DeveloperDetailsService';

class DeveloperDetailsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const developer = await DeveloperDetailsService.execute(id);

    return res.json(developer);
  }
}

export default new DeveloperDetailsController();
