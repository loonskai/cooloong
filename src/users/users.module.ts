import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrewsModule } from 'src/brews/brews.module';
import { UserEntity } from './user.entity';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    forwardRef(() => BrewsModule),
  ],
  providers: [UsersService, UsersResolver],
  // exports: [UsersService],
})
export class UsersModule {}
