import {
  Resolver,
  Query,
  Args,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { CreateBrewInput } from './dto/create-brew.input';
import { UserEntity } from 'src/users/user.entity';
import { BrewEntity } from './brew.entity';
import { BrewsService } from './brews.service';
import { TeaEntity } from 'src/teas/tea.entity';

@Resolver('Brew')
export class BrewsResolver {
  constructor(private brewsService: BrewsService) {}

  @Query()
  async brews() {
    return this.brewsService.findAll();
  }

  @Query()
  async brew(@Args('id') id: number) {
    return this.brewsService.findOneById(id);
  }

  @ResolveField(() => UserEntity)
  user(@Parent() brew: BrewEntity) {
    return this.brewsService.getUser(brew.userId);
  }

  @ResolveField(() => TeaEntity)
  tea(@Parent() brew: BrewEntity) {
    return this.brewsService.getTea(brew.teaId);
  }

  @Mutation(() => BrewEntity)
  createBrew(@Args('createBrewInput') createBrewInput: CreateBrewInput) {
    return this.brewsService.create(createBrewInput);
  }
}
