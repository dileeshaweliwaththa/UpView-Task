import { BaseAbstractRepositoryImpl } from "src/core/repositories/base/base-abstract.repository";
import { Todo } from "../entities/todo.entity";
import { IToDoRepository } from "../interfaces/todo-repository.interface";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

export class ToDoRepository extends BaseAbstractRepositoryImpl<Todo> implements IToDoRepository {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) {
    super(todoRepository);
  }

  async findOneById(id: string): Promise<Todo> {
    return await this.todoRepository.findOneBy({id});
  }
}