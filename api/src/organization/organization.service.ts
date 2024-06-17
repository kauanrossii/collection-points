import { inject, injectable } from "inversify";
import { CreateOrganizationDto } from "./dto/create-organization.dto";
import { Organization } from "./entity/organization.entity";
import { IOrganizationRepository } from "./organization.repository";
import { TYPES } from "../common/util/di/di-types";

interface IOrganizationService {
    create(organization: Organization): Promise<number>;
    update(organization: Organization);
    delete(id: number);
    findAll();
}

@injectable()
class OrganizationService implements IOrganizationService {
    constructor(
        @inject(TYPES.IOrganizationRepository)
        private readonly _iOrganizationRepository: IOrganizationRepository
    ) {}

    async findAll() {
        return await this._iOrganizationRepository.findAll();
    }

    async delete(id: number) {
        await this._iOrganizationRepository.delete(id);
    }

    async update(organization: Organization) {
        await this._iOrganizationRepository.update(organization.id, organization);
    }

    async create(createOrganizationDto: CreateOrganizationDto) {
        return await this._iOrganizationRepository
            .create(createOrganizationDto as Organization);
    }
}

export { IOrganizationService, OrganizationService };