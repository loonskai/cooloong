import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { TeaService } from './tea.service';

@Resolver('Tea')
export class TeaResolver {
  constructor(private teaService: TeaService) {}

  @Query()
  async teaItems() {
    return this.teaService.findAll();
  }

  @Query()
  async tea(@Args('id') id: number) {
    return this.teaService.findOneById(id);
  }

  @Mutation()
  async createTea(@Args('name') name: string) {
    return this.teaService.create({ name });
  }
}
