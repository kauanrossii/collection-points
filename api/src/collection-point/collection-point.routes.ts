import { Application } from "express";
import { ICollectionPointController } from "./collection-point.controller";

export function configureCollectionPointRoutes(app: Application, collectionPointController: ICollectionPointController) {
    app.post('/collection-point', collectionPointController.create);
    app.put('/collection-point/:id', collectionPointController.update);
    app.get('/collection-point', collectionPointController.findAll);
    app.delete('/collection-point/:id', collectionPointController.delete);
}