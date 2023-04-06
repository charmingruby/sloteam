import { prisma } from '../../../libs/prisma';

interface CreateUserTypes {
  name: string;
  email: string;
  passwordHash: string;
  imagePath: string;
}

interface FindByEmailProps {
  email: string;
}

class UserRepositories {
  async create({ name, email, passwordHash, imagePath }: CreateUserTypes) {
    return await prisma.user.create({
      data: {
        name: name,
        email: email,
        password: passwordHash,
        icon: imagePath,
      },
      select: {
        id: true,
        name: true,
        email: true,
        created_at: true,
      }
    });
  }

  async findByEmail({ email }: FindByEmailProps) {
    return await prisma.user.findFirst({
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
  }
}

export default new UserRepositories();
