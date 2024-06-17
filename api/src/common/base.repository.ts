import { FindOptionsWhere, Repository } from "typeorm"
import { BaseEntity } from "./base.entity";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";
import { injectable } from "inversify";
import { AppDataSource } from "../data-source";
interface IBaseRepository<T extends BaseEntity> {
    findById(id: number): Promise<T>;
    findAll(): Promise<T[]>;
    create(data: T): Promise<number>;
    update(id: number, data: QueryDeepPartialEntity<T>);
    delete(id: number): Promise<void>;
}

@injectable()
abstract class BaseRepository<T extends BaseEntity> implements IBaseRepository<T> {
    public readonly repository: Repository<T>;

    constructor(entityClass: new () => T) {
        this.repository = AppDataSource.getRepository(entityClass);
    }

    async findAll(): Promise<T[]> {
        return this.repository.find();
    }

    async findById(id: number): Promise<T> {
        return this.repository.findOneBy({ id: id} as FindOptionsWhere<T>);
    }

    public create = async (data: T) => {
        const entity = await this.repository.save(data);
        return entity.id;
    }

    async update(id: number, data: QueryDeepPartialEntity<T>) {
        return await this.repository.update(id, data);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}

export { IBaseRepository, BaseRepository };