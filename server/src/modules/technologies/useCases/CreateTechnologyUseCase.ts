import { CreateTechnologyDTO } from '../dtos/CreateTechnologyDTO';

class CreateTechnologyUseCase {
  async execute({ name, areas, description }: CreateTechnologyDTO) {
    return { name, areas, description };
  }
}

export default new CreateTechnologyUseCase();
