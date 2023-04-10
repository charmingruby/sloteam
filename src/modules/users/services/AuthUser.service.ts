import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import { IAuthUserData } from '../domain/models/IAuthUserData.model';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';

export class AuthUserService {
  constructor(
    private usersRepository: IUsersRepository
  ) {}

  async execute({ email, password }: IAuthUserData) {
    if (!email)
      throw new Error('E-mail is requred');

    if (!password)
      throw new Error('Password is requred');

    const user = await this.usersRepository.findByEmail(email);
    if (!user)
      throw new Error('Incorrect e-mail or password ');

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch)
      throw new Error('Incorrect e-mail or password ');

    const token = sign(
      {
        name: user.name,
        email: user.email
      },
      process.env.JWT_SECRET,
      {
        subject: user.id,
        expiresIn: '30d'
      }
    );

    return ({
      id: user.id,
      name: user.name,
      email: user.email,
      token: token
    });
  }
}
