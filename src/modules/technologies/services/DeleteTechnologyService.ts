import TechnologiesRepository from '../repositories/TechnologiesRepository';

class DeleteTechnologyService {
  async execute(id: string) {
    const technology = await TechnologiesRepository.delete(id);
    return technology;
  }
}

export default new DeleteTechnologyService();
