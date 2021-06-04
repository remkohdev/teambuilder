import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Member} from './member.model';

@model()
export class Team extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  name: string;

  @property({
    type: 'string',
  })
  description?: string;

  @property({
    type: 'array',
    itemType: 'number',
    required: true,
  })
  members: number[];

  @belongsTo(() => Member, {name: 'relationTeamBelongsToMember'})
  memberId: number;

  constructor(data?: Partial<Team>) {
    super(data);
  }
}

export interface TeamRelations {
  // describe navigational properties here
}

export type TeamWithRelations = Team & TeamRelations;
