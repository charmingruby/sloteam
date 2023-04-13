import { Entity } from '../../../../shared/core/entities/Entity';

type ProjectProps = {
  id?: string
  name: string
  description: string[]
  icon: string;
}

export class Project extends Entity {
  public name: string;
  public description: string[];
  public development: boolean;
  public icon: string;

  constructor({id, name, description, icon }: ProjectProps) {
    super(id);

    this.name = name;
    this.description = description;
    this.icon = icon;
  }
}
