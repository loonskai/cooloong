import { Resolver, Query, Args } from '@nestjs/graphql';
import { TeasService } from './teas.service';

@Resolver('Tea')
export class TeasResolver {
  constructor(private teasService: TeasService) {}

  @Query()
  async tea(@Args('id') id: number) {
    return this.teasService.findOneById(id);
  }
}
