import { Request, Response } from "express";
import { IOrganizationService } from "./organization.service";
import { inject, injectable } from "inversify";
import { TYPES } from "../common/util/di/di-types";
import { Organization } from "./entity/organization.entity";

interface IOrganizationController {
    create(req: Request, res: Response);
    update(req: Request, res: Response);
    delete(req: Request, res: Response);
    findAll(req: Request, res: Response);
}

@injectable()
class OrganizationController implements IOrganizationController {
    constructor(@inject(TYPES.IOrganizationService) private readonly organizationService: IOrganizationService) {
        this.create = this.create.bind(this);
        this.update = this.update.bind(this);
        this.findAll = this.findAll.bind(this);
        this.delete = this.delete.bind(this);
    }

    async delete(req: Request, res: Response) {
        await this.organizationService.delete(Number(req.params.id));
        return res.status(204).json();
    }

    async findAll(req: Request, res: Response) {
        const organizations = await this.organizationService.findAll();
        return res.status(200).json(organizations);
    }

    async create(req: Request, res: Response) {
        const organizationId = await this.organizationService.create(req.body);
        return res.status(201).json(organizationId);
    }

    async update(req: Request, res: Response) {
        const organization = Object.assign({}, {
            id: req.params.id,
            name: req.body.name,
            cnpj: req.body.cnpj,
        }) as unknown as Organization;
        await this.organizationService.update(organization);
        return res.status(204).json();
    }
}

export { IOrganizationController, OrganizationController };