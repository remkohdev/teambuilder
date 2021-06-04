import {model, property} from '@loopback/repository';
import {User} from '.';

@model()
export class Member extends User {
  @property({
    type: 'string',
  })
  college?: string;

  @property({
    type: 'string',
  })
  major?: string;


  constructor(data?: Partial<Member>) {
    super(data);
  }
}

export interface MemberRelations {
  // describe navigational properties here
}

export type MemberWithRelations = Member & MemberRelations;
