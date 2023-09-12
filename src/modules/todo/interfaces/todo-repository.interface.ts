import { IBaseRepository } from "src/core/repositories/base/base-interface.repository";
import { Todo } from "../entities/todo.entity";

export const ToDoRepositoryInterface = 'IToDoRepository';
export interface IToDoRepository extends IBaseRepository<Todo> {

    findOneById(id: string): Promise<Todo>;
    
}