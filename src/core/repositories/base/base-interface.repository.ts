export interface IBaseRepository<T> {
  create(data: T): Promise<T>;
  findAll(): Promise<T[]>;
  update(entityToUpdate: T): Promise<T>;
  delete(id: string): Promise<void>;
}
