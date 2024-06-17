import { inject, injectable } from "inversify";
import { BaseRepository, IBaseRepository } from "../common/base.repository";
import { CollectionPoint } from "./entity/collection-point.entity";
import { TYPES } from "../common/util/di/di-types";

interface ICollectionPointRepository extends IBaseRepository<CollectionPoint> {}

@injectable()
class CollectionPointRepository extends BaseRepository<CollectionPoint> implements ICollectionPointRepository {
    constructor(@inject(TYPES.CollectionPoint) entityClass: { new (): CollectionPoint }) {
        super(entityClass);
    }
}

export { ICollectionPointRepository, CollectionPointRepository };