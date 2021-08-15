import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TeasService } from 'src/teas/teas.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { BrewEntity } from './brew.entity';
import { CreateBrewInput } from './dto/create-brew.input';

@Injectable()
export class BrewsService {
  constructor(
    @InjectRepository(BrewEntity)
    private readonly brewsRepository: Repository<BrewEntity>,
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private teasService: TeasService,
  ) {}

  create(createBrewInput: CreateBrewInput) {
    const newBrew = this.brewsRepository.create(createBrewInput);
    return this.brewsRepository.save(newBrew);
  }

  findAll() {
    return this.brewsRepository.find();
  }

  async findOneById(id: number) {
    return this.brewsRepository.findOneOrFail(id);
  }

  getUser(userId: number) {
    return this.usersService.findOneById(userId);
  }

  getTea(teaId: number) {
    return this.teasService.findOneById(teaId);
  }
}
