import { Entity } from '../../../../shared/core/entities/Entity';

type DeveloperProps = {
  id?: string
  name: string;
  last_name: string;
  age: number;
  icon: string;
  email: string;
}

export class Developer extends Entity {
  public name: string;
  public last_name: string;
  public age: number;
  public icon: string;
  public email: string;

  constructor({id, name, last_name, age, icon, email }: DeveloperProps) {
    super(id);

    this.name = name;
    this.last_name = last_name;
    this.age = age;
    this.email = email;
    this.icon = icon;
  }
}
