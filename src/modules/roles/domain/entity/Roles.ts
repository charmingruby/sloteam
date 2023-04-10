import crypto from 'crypto';

type RoleProps = {
  name: string
  description: string[]
  icon: string;
}

export class Role {
  public id: string;
  public name: string;
  public created_at: Date;
  public updated_at: Date;

  constructor(
    {name}: RoleProps,
    id?: string) {
    const actualTime = new Date();

    this.id = id ?? crypto.randomUUID();
    this.name = name;
    this.created_at = actualTime;
    this.updated_at = actualTime;
  }
}
