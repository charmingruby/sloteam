import DevelopersRepository from '../repositories/DevelopersRepository';

class CreateDeveloperService {
  async execute({ name, lastName, age, iconPath, email }) {
    if (!name)
      throw new Error('Name is required');

    if (!lastName)
      throw new Error('Last name is required');

    if (!age)
      throw new Error('Age is required');

    if (!iconPath)
      throw new Error('Icon is required');

    if (!email) {
      throw new Error('E-mail is required');
    }

    const developerAlreadyExists = await DevelopersRepository.findByEmail(email);
    if (developerAlreadyExists)
      throw new Error('This e-mail is already in use');

    const developer = await DevelopersRepository.create({ name, lastName, age, iconPath, email });
    return developer;
  }

}

export default new CreateDeveloperService();
