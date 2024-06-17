import express from "express"
import { IOrganizationController } from "./organization/organization.controller";
import { Container } from "inversify";
import { configureDependencyContainer } from "./common/util/di/di-configure";
import { TYPES } from "./common/util/di/di-types";
import { configureOrganizationRoutes } from "./organization/organization.routes";
import { ICollectionPointController } from "./collection-point/collection-point.controller";
import { configureCollectionPointRoutes } from "./collection-point/collection-point.routes";

class App {
    public express: express.Application;
    public container: Container;
    private readonly _organizationController: IOrganizationController;
    private readonly _collectionPointController: ICollectionPointController;

    public constructor() {
        this.express = express();
        this.configureCors();
        this.container = new Container({ defaultScope: "Request"});
        configureDependencyContainer(this.container);
        this._organizationController = this.container.get<IOrganizationController>(TYPES.IOrganizationController);
        this._collectionPointController = this.container.get<ICollectionPointController>(TYPES.ICollectionPointController);
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(express.json());
    }

    private routes(): void {
        configureOrganizationRoutes(this.express, this._organizationController);
        configureCollectionPointRoutes(this.express, this._collectionPointController);
    }

    private configureCors() {
        const cors = require("cors");
        this.express.use(cors());
    }
}

export default new App().express;