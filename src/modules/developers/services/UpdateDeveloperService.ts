import { DevelopersType } from '../types/DevelopersType';
import DevelopersRepository from '../repositories/DevelopersRepository';

class UpdateDeveloperService {
  async execute({ id, name, lastName, age, iconPath, email }: DevelopersType) {
    if (!name && !lastName && !age && !iconPath && !email) {
      throw new Error('Nothing to change');
    }

    const developer = await DevelopersRepository.update({ id, name, lastName, age, iconPath, email });
    return developer;
  }
}

export default new UpdateDeveloperService();
