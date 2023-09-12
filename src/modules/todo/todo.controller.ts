import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiTags } from '@nestjs/swagger';
import { Todo } from './entities/todo.entity';

@ApiTags('Todo')
@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) {}

  /**
   * Create a new todo
   * @param {CreateTodoDto} createTodoDto - data to be created
   * @returns - created data
   */
  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    console.log(createTodoDto);
    return this.todoService.create(createTodoDto);
  }

  /**
   * Get all todos
   * @returns - all todos
   */
  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  /**
   * find todo by id
   * @param id - UUID of todo
   * @returns - todo with given id
   */
  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  /**
   * find todo by id and update
   * @param id - UUID of todo
   * @param {UpdateTodoDto} updateTodoDto - data to be updated
   * @returns - updated data
   */
  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoService.update(id, updateTodoDto);
  }

  /**
   * find todo by id and delete
   * @param id - UUID of todo
   * @returns - deleted message with status code
   */
  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string){
    return this.todoService.remove(id);
  }
}
