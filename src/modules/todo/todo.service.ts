import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { IToDoRepository, ToDoRepositoryInterface } from './interfaces/todo-repository.interface';
import { read } from 'fs';
import { Todo } from './entities/todo.entity';
import { get } from 'http';
import { Messages } from 'src/core/constants/messages';
import { StatusCode } from 'src/core/constants/status-codes';

@Injectable()
export class TodoService {

  constructor(
    @Inject(`${ToDoRepositoryInterface}`)
    private readonly todoRepository: IToDoRepository
  ) {}


  /**
   * Create a todo
   * @param createTodoDto - data to be created
   * @throws {NotFoundException} - if todo is not found
   * @returns - created todo
   */
  async create(createTodoDto: CreateTodoDto) {

    const todo: Todo = new Todo();
    todo.title = createTodoDto.title;
    todo.description = createTodoDto.description;
    todo.status = createTodoDto.status;

    const createToDo = await this.todoRepository.create(todo);
    console.log("created",createToDo);

    return createToDo;
  }

  /**
   * Return all todos
   * @returns - all todos
   * @throws {NotFoundException} - if no todos are found
   */
  async findAll() {
    const findAllTodos = await this.todoRepository.findAll();
    if(!findAllTodos || findAllTodos.length === 0){
      throw new NotFoundException({ message: Messages.ERROR.TODO_NOT_FOUND, status_code: StatusCode.ERROR_CODE.NOT_FOUND});
    }
    return findAllTodos;
  }

  /**
   * Return a todo by id
   * @param id - id of the todo to be found
   * @throws {NotFoundException} - if todo is not found
   * @returns - todo found
   */
  async findOne(id: string) {
    console.log("id",id);
    const findOneByID = await this.todoRepository.findOneById(id);
    if(!findOneByID){
      throw new NotFoundException({ message: Messages.ERROR.TODO_NOT_FOUND, status_code: StatusCode.ERROR_CODE.NOT_FOUND });
    }
    return findOneByID;
  }

  /**
   * Update a todo by id
   * @param id - id of the todo to be updated
   * @param updateTodoDto - data to be updated
   * @throws {NotFoundException} - if todo is not found
   * @returns - updated todo
   */
  async update(id: string, updateTodoDto: UpdateTodoDto) {

    console.log("id",id);
    const getTodoById = await this.todoRepository.findOneById(id);
    if(!getTodoById){
      throw new NotFoundException({ message: Messages.ERROR.TODO_NOT_FOUND, status_code: StatusCode.ERROR_CODE.NOT_FOUND });
    }

    getTodoById.status = updateTodoDto.status;

    const updatedTodo = await this.todoRepository.update(getTodoById);
    console.log("getTodoById",updatedTodo);
    return updatedTodo;
  }

  /**
   * Delete a todo by id
   * @param id - id of the todo to be deleted
   * @throws {NotFoundException} - if todo is not found
   * @returns - message of success
   */
  async remove(id: string) {
    console.log("id",id);
    const getTodoById = await this.todoRepository.findOneById(id);
    if(!getTodoById){
      throw new NotFoundException({ message: Messages.ERROR.TODO_NOT_FOUND, status_code: StatusCode.ERROR_CODE.NOT_FOUND });
    }

    await this.todoRepository.delete(id);
    return {message: Messages.SUCCESS.TODO_DELETED, status_code: StatusCode.SUCCESS_CODE.DELETED };
  }
}
