import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from './entities/todo.entity';
import { ToDoRepositoryInterface } from './interfaces/todo-repository.interface';
import { ToDoRepository } from './repository/todo.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  controllers: [TodoController],
  providers: [
    TodoService,
    {
      provide: `${ToDoRepositoryInterface}`,
      useClass: ToDoRepository
    }
  
  ],
})
export class TodoModule {}
