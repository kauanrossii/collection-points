import { Application } from "express";
import { IOrganizationController } from "./organization.controller";

export function configureOrganizationRoutes(app: Application, organizationController: IOrganizationController) {
    app.post('/organization', organizationController.create);
    app.put('/organization/:id', organizationController.update);
    app.get('/organization', organizationController.findAll);
    app.delete('/organization/:id', organizationController.delete);
}