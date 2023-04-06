import { Request, Response } from 'express';
import TechnologyDetailsService from '../../services/TechnologyDetailsService';

class TechnologyDetailsController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;

    const technology = await TechnologyDetailsService.execute(id);

    return res.json(technology);
  }
}

export default new TechnologyDetailsController();
