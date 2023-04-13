import { Entity } from '../../../../shared/core/entities/Entity';

type TechnologyProps = {
  id?: string
  name: string
  description: string
  project_id: string
}

export class Technology extends Entity {
  public name: string;
  public description: string;
  public project_id: string | null;

  constructor({id, name, description, project_id }: TechnologyProps) {
    super(id);

    this.name = name;
    this.description = description;
    this.project_id = project_id;
  }
}
