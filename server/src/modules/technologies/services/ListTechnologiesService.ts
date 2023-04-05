import TechnologiesRepository from '../repositories/TechnologiesRepository';

class ListTechnologiesService {
  async execute() {
    const technologies = await TechnologiesRepository.index();
    return technologies;
  }
}

export default new ListTechnologiesService();
