import { TYPES } from "../common/util/di/di-types";
import { BaseRepository, IBaseRepository } from "../common/base.repository";
import { Organization } from "./entity/organization.entity";
import { inject, injectable } from "inversify";

interface IOrganizationRepository extends IBaseRepository<Organization> {}

@injectable()
class OrganizationRepository extends BaseRepository<Organization> implements IOrganizationRepository {
    constructor(@inject(TYPES.Organization) entityClass: { new (): Organization }) {
        super(entityClass);
    }
}

export { IOrganizationRepository, OrganizationRepository };