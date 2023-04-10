import crypto from 'crypto';

type TechnologyProps = {
  name: string
  description: string
}

export class Technology {
  public id: string;
  public name: string;
  public description: string;
  public created_at: Date | null;
  public updated_at: Date | null;
  public project_id: string | null;

  constructor(
    {name, description }: TechnologyProps,
    id?: string) {
    const actualTime = new Date();

    this.id = id ?? crypto.randomUUID();
    this.name = name;
    this.description = description;
    this.created_at = actualTime;
    this.updated_at = actualTime;
  }
}
