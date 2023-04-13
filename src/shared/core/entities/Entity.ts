import crypto from 'crypto';

const randomId = crypto.randomUUID();
const randomDate = new Date();

export abstract class Entity {
  public id: string;
  public created_at: Date;
  public updated_at: Date;

  constructor(id?: string) {
    this.id = id ?? randomId;
    this.created_at = randomDate;
    this.updated_at = randomDate;
  }
}
