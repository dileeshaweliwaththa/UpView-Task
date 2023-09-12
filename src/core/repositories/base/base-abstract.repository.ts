import { Repository } from "typeorm";
import { IBaseRepository } from "./base-interface.repository";

export abstract class BaseAbstractRepositoryImpl<T> implements IBaseRepository<T>{

    protected constructor(private entity: Repository<T>){}

    async create(data: T): Promise<T> {
        return await this.entity.save(data);
    }

    async findAll(): Promise<T[]> {
        return await this.entity.find();
    }

    async update(entityToUpdate: T): Promise<T> {
        return await this.entity.save(entityToUpdate);
    }

    async delete(id: string): Promise<void> {
        await this.entity.delete(id);
    }
}