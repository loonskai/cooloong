import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { CreateTeaInput } from './dto/create-tea.input';
import { TeaEntity } from './tea.entity';
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

  @Mutation(() => TeaEntity)
  async createTea(@Args('createTeaInput') createTeaInput: CreateTeaInput) {
    return this.teasService.create(createTeaInput);
  }
}
