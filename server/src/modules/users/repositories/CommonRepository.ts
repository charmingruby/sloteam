import { prisma } from '../../../libs/prisma';

interface FindByEmailProps {
  email: string;
}

class CreateUserRepository {
  async findByEmail({ email }: FindByEmailProps) {
    const emailAlreadyExists = await prisma.user.findFirst({
      where: {
        email: email
      },
      select: {
        id: true,
        name: true,
        email: true,
        password: true,
      }
    });
    return emailAlreadyExists;
  }
}

export default new CreateUserRepository();
