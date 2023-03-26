import { CreateUserDTO } from '../dtos/CreateUserDTO';
import CreateUserRepository from '../repositories/UserRepositories';
import UserRepositories from '../repositories/UserRepositories';
import { hash } from 'bcryptjs';

class CreateUserUseCase {
  async execute({ name, email, password, imagePath }: CreateUserDTO) {
    if (!name)
      throw new Error('Name is requred');

    if (!email)
      throw new Error('E-mail is requred');

    if (!password)
      throw new Error('Password is requred');

    if (!imagePath)
      throw new Error('Image is requred');

    const userAlreadyExists = await UserRepositories.findByEmail({ email });
    if (userAlreadyExists)
      throw new Error('This e-mail is already in use');

    const passwordHash = await hash(password, 8);

    const user = await CreateUserRepository.create({ name, email, passwordHash, imagePath });
    return user;
  }
}

export default new CreateUserUseCase();
