import { ICreateUserData } from '../domain/models/ICreateUserData.model';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';
import { hash } from 'bcryptjs';

export class CreateUserService {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute({ name, email, password, icon }: ICreateUserData) {
    if (!name)
      throw new Error('Name is requred');

    if (!email)
      throw new Error('E-mail is requred');

    if (!password)
      throw new Error('Password is requred');

    if (!icon)
      throw new Error('Icon is requred');

    const userAlreadyExists = await this.usersRepository.findByEmail(email);
    if (userAlreadyExists)
      throw new Error('This e-mail is already in use');

    password = await hash(password, 8);

    await this.usersRepository.create({ name, email, password, icon });
  }
}
