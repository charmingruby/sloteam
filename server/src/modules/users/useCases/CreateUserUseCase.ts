import { CreateUserDTO } from '../dtos/CreateUserDTO';
import CreateUserRepository from '../repositories/CreateUserRepository';
import CommonRepository from '../repositories/CommonRepository';
import { hash } from 'bcryptjs';

class CreateUserUseCase {
  async execute({ name, email, password, imagePath }: CreateUserDTO) {

    const userAlreadyExists = await CommonRepository.findByEmail({ email });
    if (userAlreadyExists) {
      throw new Error('This user is already in use');
    }

    const passwordHash = await hash(password, 8);

    const user = await CreateUserRepository.create({ name, email, passwordHash, imagePath });
    return user;
  }
}

export default new CreateUserUseCase();
