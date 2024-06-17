import { inject, injectable } from "inversify";
import { Request, Response } from "express";
import { TYPES } from "../common/util/di/di-types";
import { ICollectionPointService } from "./collection-point.service";
import { CollectionPoint } from "./entity/collection-point.entity";

interface ICollectionPointController {
    create(req: Request, res: Response);
    update(req: Request, res: Response);
    delete(req: Request, res: Response);
    findAll(req: Request, res: Response);
}

@injectable()
class CollectionPointController implements ICollectionPointController {
    constructor(
        @inject(TYPES.ICollectionPointService)
        private readonly _collectionPointService: ICollectionPointService
    ) {
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.findAll = this.findAll.bind(this);
        this.delete = this.delete.bind(this);
    }

    async delete(req: Request, res: Response) {
        await this._collectionPointService.delete(Number(req.params.id));
        return res.status(204).json();
    }

    async findAll(req: Request, res: Response) {
        const organizations = await this._collectionPointService.findAll();
        return res.status(200).json(organizations);
    }

    async create(req: Request, res: Response) {
        const organizationId = await this._collectionPointService.create(req.body);
        return res.status(201).json(organizationId);
    }

    async update(req: Request, res: Response) {
        console.log(req.body);
        // const organization = Object.assign({}, {
        //     id: req.params.id,
        //     state: req.body.state,
        //     street: req.body.street,
        //     city: req.body.city,
        //     zipCode: req.body.zipCode,
        // }) as unknown as CollectionPoint;
        // await this._collectionPointService.update(organization);
        return res.status(204).json();
    }
}

export { ICollectionPointController, CollectionPointController };