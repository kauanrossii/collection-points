import express from "express"
import { IOrganizationController } from "./organization/organization.controller";
import { Container } from "inversify";
import { configureDependencyContainer } from "./api/util/di/di-configure";
import { TYPES } from "./api/util/di/di-types";
import { configureOrganizationRoutes } from "./organization/organization.router";

class App {
    public express: express.Application;
    public container: Container;
    private readonly _organizationController: IOrganizationController;

    public constructor() {
        this.express = express();
        this.container = new Container({ defaultScope: "Request"});
        configureDependencyContainer(this.container);
        this._organizationController = this.container.get<IOrganizationController>(TYPES.IOrganizationController);
        this.middleware();
        this.routes();
    }

    private middleware(): void {
        this.express.use(express.json());
    }

    private routes(): void {
        configureOrganizationRoutes(this.express, this._organizationController);
    }
}

export default new App().express;