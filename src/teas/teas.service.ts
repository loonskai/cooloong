import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tea } from './entities/tea.entity';

@Injectable()
export class TeasService {
  constructor(
    @InjectRepository(Tea) private readonly teaRepository: Repository<Tea>,
  ) {}

  create(teaDto: { name: string }) {
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
