import { Developer } from '@prisma/client';
import { getRedis, setRedis } from '../../../shared/cache/RedisCache';
import { IDevelopersRepository } from '../domain/repositories/IDevelopersRepository';

export class ListDevelopersService {
  constructor(
    private developersRepository: IDevelopersRepository
  ) {}

  async execute() {
    let developers = await getRedis<Developer[]>(
      'sloteam-DEVELOPERS_LIST'
    );

    if(!developers) {
      developers = await this.developersRepository.index();

      setRedis('sloteam-DEVELOPERS_LIST', developers);
    }

    return developers;
  }
}

