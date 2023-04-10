import crypto from 'crypto';

type DeveloperProps = {
  name: string;
  last_name: string;
  age: number;
  icon: string;
  email: string;
}

export class Developer {
  public id: string;
  public name: string;
  public last_name: string;
  public age: number;
  public icon: string;
  public email: string;
  public created_at: Date;
  public updated_at: Date;

  constructor(
    {name, last_name, age, icon, email }: DeveloperProps,
    id?: string) {
    const actualTime = new Date();

    this.id = id ?? crypto.randomUUID();
    this.name = name;
    this.last_name = last_name;
    this.age = age;
    this.email = email;
    this.icon = icon;
    this.created_at = actualTime;
    this.updated_at = actualTime;
  }
}
