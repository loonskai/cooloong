import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TeaEntity } from './entities/tea.entity';
import { CreateTeaDto } from './dto/create-tea.dto';
@Injectable()
export class TeaService {
  constructor(
    @InjectRepository(TeaEntity)
    private readonly teaRepository: Repository<TeaEntity>,
  ) {}

  create(teaDto: CreateTeaDto) {
    const tea = this.teaRepository.create(teaDto);
    return this.teaRepository.save(tea);
  }

  findAll() {
    return this.teaRepository.find();
  }

  async findOneById(id: number) {
    return await this.teaRepository.findOne(id);
  }
}
