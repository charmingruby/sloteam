import { IUpdateDeveloperData } from '../domain/models/IUpdateDeveloperData.model';
import { IDevelopersRepository } from '../domain/repositories/IDevelopersRepository';

export class UpdateDeveloperService {
  constructor(
    private developersRepository: IDevelopersRepository
  ) {}

  async execute({ id, name, last_name, age, icon, email }: IUpdateDeveloperData) {
    const developerExists = this.developersRepository.findById(id);
    if(!developerExists) {
      throw new Error('This developer doesn\'t exists');
    }

    if (!name && !last_name && !age && !icon && !email) {
      throw new Error('Nothing to change');
    }

    await this.developersRepository.update({ id, name, last_name, age, icon, email });
  }
}

