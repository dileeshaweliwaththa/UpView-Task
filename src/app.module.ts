import { Module } from '@nestjs/common';
import { TodoModule } from './modules/todo/todo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import getConfig from './core/config/configurations';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(getConfig().DATABASE),
    TodoModule],
  controllers: [],
  providers: [],
})

export class AppModule {}


