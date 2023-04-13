import { ICreateDeveloperData } from '../domain/models/ICreateDeveloperData.model';
import { IDevelopersRepository } from '../domain/repositories/IDevelopersRepository';
import { invalidateRedis } from '../../../shared/cache/RedisCache';

export class CreateDeveloperService {
  constructor(
    private developersRepository: IDevelopersRepository
  ) {}

  async execute({ name, last_name, age, icon, email }: ICreateDeveloperData) {
    if (!name)
      throw new Error('Name is required');

    if (!last_name)
      throw new Error('Last name is required');

    if (!age)
      throw new Error('Age is required');

    if (!icon)
      throw new Error('Icon is required');

    if (!email) {
      throw new Error('E-mail is required');
    }

    const developerAlreadyExists = await this.developersRepository.findByEmail(email);
    if (developerAlreadyExists)
      throw new Error('This e-mail is already in use');

    invalidateRedis('sloteam-DEVELOPERS_LIST');

    const developer = await this.developersRepository.create({ name, last_name, age, icon, email });
    return developer;
  }
}
