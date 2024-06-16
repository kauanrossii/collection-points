import { CreateOrganizationDto } from "./dto/create-organization.dto";
import { Organization } from "./entity/organization.entity";
import { OrganizationRepository } from "./organization.repository";

interface IOrganizationService {
    create(organization: Organization);
}

class OrganizationService implements IOrganizationService {
    constructor(private readonly organizationRepository: OrganizationRepository) {}

    async create(createOrganizationDto: CreateOrganizationDto) {
        const organization = await this.organizationRepository.create(createOrganizationDto as Organization);
    }
}

export { IOrganizationService, OrganizationService };