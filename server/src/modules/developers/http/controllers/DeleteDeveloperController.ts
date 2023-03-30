import { Request, Response } from 'express';
import DeleteDeveloperUseCase from '../../useCases/DeleteDeveloperUseCase';

class DeleteDeveloperController {
  async handle(req: Request, res: Response) {
    const { id } = req.params;
    const developer = await DeleteDeveloperUseCase.execute(id);
    return res.sendStatus(204);
  }
}

export default new DeleteDeveloperController();
