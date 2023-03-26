import DeveloperRepositories from '../repositories/DeveloperRepositories';

class CreateDeveloperUseCase {
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

    const developerAlreadyExists = await DeveloperRepositories.findByEmail(email);
    if (developerAlreadyExists)
      throw new Error('This e-mail is already in use');

    const developer = await DeveloperRepositories.create({ name, lastName, age, iconPath, email });
    return developer;
  }

}

export default new CreateDeveloperUseCase();
