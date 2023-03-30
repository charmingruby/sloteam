import { DevelopersDTO } from '../dtos/DevelopersDTO';
import DevelopersRepository from '../repositories/DevelopersRepository';

class UpdateDeveloperUseCase {
  async execute({ id, name, lastName, age, iconPath, email }: DevelopersDTO) {
    if (!name && !lastName && !age && !iconPath && !email) {
      throw new Error('Nothing to change');
    }

    const developer = await DevelopersRepository.update({ id, name, lastName, age, iconPath, email });
    return developer;
  }
}

export default new UpdateDeveloperUseCase();
