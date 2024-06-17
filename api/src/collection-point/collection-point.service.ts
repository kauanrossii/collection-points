import { inject, injectable } from "inversify";
import { CollectionPoint } from "./entity/collection-point.entity";
import { TYPES } from "../common/util/di/di-types";
import { ICollectionPointRepository } from "./collection-point.repository";

interface ICollectionPointService {
    create(collectionPoint: CollectionPoint): Promise<number>;
    update(collectionPoint: CollectionPoint): Promise<void>;
    delete(id: number): Promise<void>;
    findAll(): Promise<CollectionPoint[]>;
}

@injectable()
class CollectionPointService implements ICollectionPointService {
    constructor(
        @inject(TYPES.ICollectionPointRepository)
        private readonly _collectionPointRepository: ICollectionPointRepository
    ) {}

    async create(collectionPoint: CollectionPoint): Promise<number> {
        return await this._collectionPointRepository.create(collectionPoint);
    }

    async update(collectionPoint: CollectionPoint) {
        await this._collectionPointRepository.update(collectionPoint.id, collectionPoint);
    }

    async delete(id: number) {
        await this._collectionPointRepository.delete(id);
    }

    async findAll(): Promise<CollectionPoint[]> {
        const all = await this._collectionPointRepository.findAll(); 
        console.log(all);
        return all;
    }
}

export { ICollectionPointService, CollectionPointService };