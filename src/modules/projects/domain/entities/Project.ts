import crypto from 'crypto';

type ProjectProps = {
  name: string
  description: string[]
  icon: string;
}

export class Project {
  public id: string;
  public name: string;
  public description: string[];
  public development: boolean;
  public icon: string;
  public created_at: Date;
  public updated_at: Date;

  constructor(
    {name, description, icon }: ProjectProps,
    id?: string) {
    const actualTime = new Date();

    this.id = id ?? crypto.randomUUID();
    this.name = name;
    this.description = description;
    this.icon = icon;
    this.created_at = actualTime;
    this.updated_at = actualTime;
  }
}
