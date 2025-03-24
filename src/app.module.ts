import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { PetsModule } from './pets/pets.module';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), "src/schema.ql")
    }),
    TypeOrmModule.forRoot({
      type: "sqlite",
      database: "memory",
      entities: [__dirname + '/../**/*.entity.js'],
      synchronize: true

    }),
    PetsModule,],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
