import { Entity } from '../../../../shared/core/entities/Entity';

type RoleProps = {
  id?: string
  name: string
}

export class Role extends Entity {
  public name: string;

  constructor({id, name}: RoleProps) {
    super(id);

    this.name = name;
  }
}
