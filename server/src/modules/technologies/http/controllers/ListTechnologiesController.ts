import { Request, Response } from 'express';
import ListTechnologiesService from '../../services/ListTechnologiesService';

class ListTechnologiesController {
  async handle(req: Request, res: Response) {
    const technologies = await ListTechnologiesService.execute();
    return res.json(technologies);
  }
}

export default new ListTechnologiesController();
