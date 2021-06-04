import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MemoryDbDataSource} from '../datasources';
import {Member, MemberRelations} from '../models';

export class MemberRepository extends DefaultCrudRepository<
  Member,
  typeof Member.prototype.id,
  MemberRelations
> {
  constructor(
    @inject('datasources.memory_db') dataSource: MemoryDbDataSource,
  ) {
    super(Member, dataSource);
  }
}
