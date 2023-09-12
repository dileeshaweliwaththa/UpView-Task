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


  @Post()
  create(@Body() createTodoDto: CreateTodoDto): Promise<Todo> {
    console.log(createTodoDto);
    return this.todoService.create(createTodoDto);
  }

  @Get()
  findAll(): Promise<Todo[]> {
    return this.todoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseUUIDPipe) id: string): Promise<Todo> {
    return this.todoService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseUUIDPipe) id: string, @Body() updateTodoDto: UpdateTodoDto): Promise<Todo> {
    return this.todoService.update(id, updateTodoDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseUUIDPipe) id: string){
    return this.todoService.remove(id);
  }
}
