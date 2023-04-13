import { Entity } from '../../../../shared/core/entities/Entity';

type UserProps = {
  id?: string
  name: string
  email: string
  password: string
  icon: string;
}

export class User extends Entity {
  public name: string;
  public email: string;
  public password: string;
  public icon: string;

  constructor({id, name, email, password, icon }: UserProps) {
    super(id);

    this.name = name;
    this.email = email;
    this.password = password;
    this.icon = icon;
  }
}
