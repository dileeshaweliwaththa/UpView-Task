import { ApiProperty } from "@nestjs/swagger";
import { ITodo } from "../interfaces/todo.interface";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTodoDto{

    @ApiProperty({
        description: 'The title of the todo',
        example: 'Todo title'
    })
    @IsNotEmpty()
    @IsString()
    title: string;

    @ApiProperty({
        description: 'The description of the todo',
        example: 'Todo description'
    })
    @IsNotEmpty()
    @IsString()
    description: string;

    @ApiProperty({
        description: 'The Status of the Todo',
        example: 'INCOMPLETED'
    })
    @IsNotEmpty()
    @IsString()
    status: string;

}


