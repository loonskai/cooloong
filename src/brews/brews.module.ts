import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrewsService } from './brews.service';
import { BrewEntity } from './brew.entity';
import { BrewsResolver } from './brews.resolver';
import { UsersModule } from 'src/users/users.module';
import { TeasModule } from 'src/teas/teas.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([BrewEntity]),
    forwardRef(() => UsersModule),
    TeasModule,
  ],
  providers: [BrewsService, BrewsResolver],
  exports: [BrewsService],
})
export class BrewsModule {}
