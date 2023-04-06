import DevelopersRepository from '../repositories/DevelopersRepository';

class DeleteDeveloperService {
  async execute(id: string) {
    const developerExists = await DevelopersRepository.findById(id);
    if (!developerExists)
      throw new Error('This developer doesn\'t exists');

    const developer = await DevelopersRepository.delete(id);

    return developer;
  }
}

export default new DeleteDeveloperService();
