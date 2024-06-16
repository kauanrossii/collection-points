import { FindOptionsWhere, Repository } from "typeorm"
import { BaseEntity } from "./base.entity";
import { QueryDeepPartialEntity } from "typeorm/query-builder/QueryPartialEntity";

interface IRepositoryBase<T extends BaseEntity> {
    findById(id: number): Promise<T>;
    findAll(): Promise<T[]>;
    create(data: T);
    update(id: number, data: QueryDeepPartialEntity<T>);
    delete(id: number): Promise<void>;
}

export abstract class BaseRepository<T extends BaseEntity> implements IRepositoryBase<T> {
    constructor(private readonly repository: Repository<T>) {}

    async findAll(): Promise<T[]> {
        return this.repository.find();
    }

    async findById(id: number): Promise<T> {
        return this.repository.findOneBy({ id: id} as FindOptionsWhere<T>);
    }

    public create = async (data: T) => {
        return await this.repository.save(data);
    }

    async update(id: number, data: QueryDeepPartialEntity<T>) {
        return await this.repository.update(id, data);
    }

    async delete(id: number): Promise<void> {
        await this.repository.delete(id);
    }
}