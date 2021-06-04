import {
  repository,
} from '@loopback/repository';
import {
  param,
  get,
  getModelSchemaRef,
} from '@loopback/rest';
import {
  Team,
  Member,
} from '../models';
import {TeamRepository} from '../repositories';

export class TeamMemberController {
  constructor(
    @repository(TeamRepository)
    public teamRepository: TeamRepository,
  ) { }

  @get('/teams/{id}/member', {
    responses: {
      '200': {
        description: 'Member belonging to Team',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Member)},
          },
        },
      },
    },
  })
  async getMember(
    @param.path.number('id') id: typeof Team.prototype.id,
  ): Promise<Member> {
    return this.teamRepository.relationTeamBelongsToMember(id);
  }
}
