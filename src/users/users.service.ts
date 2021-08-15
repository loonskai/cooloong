import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { BrewsService } from 'src/brews/brews.service';
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
    private brewsService: BrewsService,
  ) {}

  create(createUserInput: CreateUserInput) {
    const user = this.usersRepository.create(createUserInput);
    return this.usersRepository.save(user);
  }

  update(updateUserInput: UpdateUserInput) {
    void 'hi';
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findOneById(id: number) {
    return await this.usersRepository.findOneOrFail(id);
  }

  async getBrews(userId: number) {
    const brews = await this.brewsService.findAll();
    return brews.filter((brew) => brew.userId === userId);
  }
}
