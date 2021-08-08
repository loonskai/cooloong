import { Args, Resolver, Query } from '@nestjs/graphql';
import { UsersService } from './users.service';

@Resolver('User')
export class UsersResolver {
  constructor(private usersService: UsersService) {}

  @Query()
  async users() {
    return this.usersService.findAll();
  }

  @Query()
  async user(@Args('id') id: number) {
    return this.usersService.findOneById(id);
  }
}
