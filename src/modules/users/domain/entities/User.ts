import crypto from 'crypto';

type UserProps = {
  name: string
  email: string
  password: string
  icon: string;
}

export class User {
  public id: string;
  public name: string;
  public email: string;
  password: string;
  public icon: string;
  public created_at: Date;
  public updated_at: Date;

  constructor(
    {name, email, password, icon }: UserProps,
    id?: string) {
    const actualTime = new Date();

    this.id = id ?? crypto.randomUUID();
    this.name = name;
    this.email = email;
    this.password = password;
    this.icon = icon;
    this.created_at = actualTime;
    this.updated_at = actualTime;
  }
}
