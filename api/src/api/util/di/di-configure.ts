import "reflect-metadata";
import { Container } from "inversify";
import { IOrganizationController, OrganizationController } from "../../../organization/organization.controller";
import { TYPES } from "./di-types";
import { IOrganizationService, OrganizationService } from "../../../organization/organization.service";
import { IOrganizationRepository, OrganizationRepository } from "../../../organization/organization.repository";
import { Organization } from "../../../organization/entity/organization.entity";

export function configureDependencyContainer(container: Container) {
    container.bind<IOrganizationController>(TYPES.IOrganizationController).to(OrganizationController);

    container.bind<IOrganizationService>(TYPES.IOrganizationService).to(OrganizationService);

    container.bind<IOrganizationRepository>(TYPES.IOrganizationRepository).to(OrganizationRepository);

    container.bind<{ new (): Organization}>(TYPES.Organization).toConstructor(Organization);
}