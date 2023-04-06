import { CreateUserType } from '../types/CreateUserType';
import CreateUserRepository from '../repositories/UsersRepository';
import UsersRepository from '../repositories/UsersRepository';
import { hash } from 'bcryptjs';

class CreateUserService {
  async execute({ name, email, password, imagePath }: CreateUserType) {
    if (!name)
      throw new Error('Name is requred');

    if (!email)
      throw new Error('E-mail is requred');

    if (!password)
      throw new Error('Password is requred');

    if (!imagePath)
      throw new Error('Image is requred');

    const userAlreadyExists = await UsersRepository.findByEmail({ email });
    if (userAlreadyExists)
      throw new Error('This e-mail is already in use');

    const passwordHash = await hash(password, 8);

    const user = await CreateUserRepository.create({ name, email, passwordHash, imagePath });
    return user;
  }
}

export default new CreateUserService();
