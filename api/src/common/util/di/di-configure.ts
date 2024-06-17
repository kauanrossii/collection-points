import "reflect-metadata";
import { Container } from "inversify";
import { IOrganizationController, OrganizationController } from "../../../organization/organization.controller";
import { TYPES } from "./di-types";
import { IOrganizationService, OrganizationService } from "../../../organization/organization.service";
import { IOrganizationRepository, OrganizationRepository } from "../../../organization/organization.repository";
import { Organization } from "../../../organization/entity/organization.entity";
import { CollectionPointController, ICollectionPointController } from "../../../collection-point/collection-point.controller";
import { CollectionPointService, ICollectionPointService } from "../../../collection-point/collection-point.service";
import { CollectionPointRepository, ICollectionPointRepository } from "../../../collection-point/collection-point.repository";
import { CollectionPoint } from "../../../collection-point/entity/collection-point.entity";

export function configureDependencyContainer(container: Container) {
    container.bind<IOrganizationController>(TYPES.IOrganizationController).to(OrganizationController);
    container.bind<ICollectionPointController>(TYPES.ICollectionPointController).to(CollectionPointController);

    container.bind<IOrganizationService>(TYPES.IOrganizationService).to(OrganizationService);
    container.bind<ICollectionPointService>(TYPES.ICollectionPointService).to(CollectionPointService);

    container.bind<IOrganizationRepository>(TYPES.IOrganizationRepository).to(OrganizationRepository);
    container.bind<ICollectionPointRepository>(TYPES.ICollectionPointRepository).to(CollectionPointRepository);

    container.bind<{ new (): Organization}>(TYPES.Organization).toConstructor(Organization);
    container.bind<{ new (): CollectionPoint}>(TYPES.CollectionPoint).toConstructor(CollectionPoint);
}