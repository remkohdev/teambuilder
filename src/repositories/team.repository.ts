import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MemoryDbDataSource} from '../datasources';
import {Team, TeamRelations, Member} from '../models';
import {MemberRepository} from './member.repository';

export class TeamRepository extends DefaultCrudRepository<
  Team,
  typeof Team.prototype.id,
  TeamRelations
> {

  public readonly relationTeamBelongsToMember: BelongsToAccessor<Member, typeof Team.prototype.id>;

  constructor(
    @inject('datasources.memory_db') dataSource: MemoryDbDataSource, @repository.getter('MemberRepository') protected memberRepositoryGetter: Getter<MemberRepository>,
  ) {
    super(Team, dataSource);
    this.relationTeamBelongsToMember = this.createBelongsToAccessorFor('relationTeamBelongsToMember', memberRepositoryGetter,);
    this.registerInclusionResolver('relationTeamBelongsToMember', this.relationTeamBelongsToMember.inclusionResolver);
  }
}
