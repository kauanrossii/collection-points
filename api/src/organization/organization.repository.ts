import { Repository } from "typeorm";
import { BaseRepository } from "../common/base.repository";
import { Organization } from "./entity/organization.entity";

interface IOrganizationRepository {}

class OrganizationRepository extends BaseRepository<Organization> implements IOrganizationRepository {
    private readonly _repository: Repository<Organization>;
}

export { IOrganizationRepository, OrganizationRepository };