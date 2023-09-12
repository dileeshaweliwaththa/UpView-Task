import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { ITodo } from "../interfaces/todo.interface";
import { TodoStatus } from "src/core/enum/todo-status";

@Entity()
export class Todo implements ITodo {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column({ default: TodoStatus.INCOMPLETED })
    status: string;
}
