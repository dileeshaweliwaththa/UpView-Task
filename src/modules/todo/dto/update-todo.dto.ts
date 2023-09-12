import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateTodoDto } from './create-todo.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateTodoDto {

    @ApiProperty({
        description: 'The Status of the todo',
        example: 'Todo Status'
    })
    @IsNotEmpty()
    status: string;
}
