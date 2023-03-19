import { Request, Response } from 'express';
import CreateUserUseCase from '../../useCases/CreateUserUseCase';

class CreateUserController {
  async handle(req: Request, res: Response) {

    if (!req.file) {
      throw new Error('Error uploading the file');
    }
    else {
      const imagePath = req.file.filename;
      const { name, email, password } = req.body;
      const user = await CreateUserUseCase.execute({ name, email, password, imagePath });
      return res.json(user);
    }
  }
}

export default new CreateUserController();
