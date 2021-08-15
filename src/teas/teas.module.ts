import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeaEntity } from './tea.entity';
import { TeasResolver } from './teas.resolver';
import { TeasService } from './teas.service';

@Module({
  imports: [TypeOrmModule.forFeature([TeaEntity])],
  providers: [TeasService, TeasResolver],
  exports: [TeasService],
})
export class TeasModule {}
