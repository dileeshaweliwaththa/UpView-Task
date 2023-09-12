import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTodoDto } from './create-todo.dto';
import { IsEnum, IsNotEmpty } from 'class-validator';
import { TodoStatus } from 'src/core/enum/todo-status';

export class UpdateTodoDto {

    @ApiProperty({
        description: 'The Status of the todo',
        enum: TodoStatus,
        enumName: 'TodoStatus'
    })
    @IsEnum(TodoStatus)
    status: string;
}
