import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TeasService } from './teas.service';

@Resolver('Tea')
export class TeasResolver {
  constructor(private teasService: TeasService) {}

  @Query()
  async teaItems() {
    return this.teasService.findAll();
  }

  @Query()
  async tea(@Args('id') id: number) {
    return this.teasService.findOneById(id);
  }

  @Mutation()
  async createTea(@Args('name') name: string) {
    return this.teasService.create({ name });
  }
}
