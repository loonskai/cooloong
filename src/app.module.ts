import { join } from 'path';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TeasModule } from './teas/teas.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      playground: true,
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.ts'),
      },
    }),
    TeasModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
