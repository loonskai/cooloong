import { forwardRef, Inject, Injectable } from '@nestjs/common';
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
    @Inject(forwardRef(() => BrewsService))
    private brewsService: BrewsService,
  ) {}

  create(createUserInput: CreateUserInput) {
    const user = this.usersRepository.create(createUserInput);
    return this.usersRepository.save(user);
  }

  async update({
    id,
    email,
    login,
    name,
    password,
    confirmPassword,
  }: UpdateUserInput) {
    const user = await this.usersRepository.findOneOrFail(id);

    if (email) {
      user.email = email;
    }
    if (login) {
      user.login = login;
    }
    if (name) {
      user.name = name;
    }
    if (password) {
      user.password = password;
    }

    return this.usersRepository.save(user);
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
