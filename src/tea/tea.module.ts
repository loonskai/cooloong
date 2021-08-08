import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeaEntity } from './entities/tea.entity';
import { TeaResolver } from './tea.resolver';
import { TeaService } from './tea.service';

@Module({
  imports: [TypeOrmModule.forFeature([TeaEntity])],
  providers: [TeaService, TeaResolver],
})
export class TeaModule {}
