import { prisma } from '../../../libs/prisma';

interface CreateUserTypes {
  name: string;
  email: string;
  passwordHash: string;
  imagePath: string;
}

class CreateUserRepository {
  async create({ name, email, passwordHash, imagePath }: CreateUserTypes) {
    const user = await prisma.user.create({
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

    return user;
  }
}

export default new CreateUserRepository();
