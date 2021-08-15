import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeaEntity } from './tea.entity';
import { CreateTeaInput } from './dto/create-tea.input';

@Injectable()
export class TeasService {
  constructor(
    @InjectRepository(TeaEntity)
    private readonly teaRepository: Repository<TeaEntity>,
  ) {}

  create(createTeaInput: CreateTeaInput) {
    const newTea = this.teaRepository.create(createTeaInput);
    return this.teaRepository.save(newTea);
  }

  findAll() {
    return this.teaRepository.find();
  }

  async findOneById(id: number) {
    return await this.teaRepository.findOneOrFail(id);
  }
}
