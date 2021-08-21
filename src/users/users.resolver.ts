import {
  Args,
  Resolver,
  Query,
  Mutation,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { CreateUserInput } from './dto/create-user.input';
import { DeleteUserInput } from './dto/delete-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { UserEntity } from './user.entity';
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

  @ResolveField()
  brews(@Parent() user: UserEntity) {
    return this.usersService.getBrews(user.id);
  }

  @Mutation(() => UserEntity)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Mutation(() => UserEntity)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation()
  deleteUser(@Args('deleteUserInput') deleteUserInput: DeleteUserInput) {
    return this.usersService.delete(deleteUserInput);
  }
}
