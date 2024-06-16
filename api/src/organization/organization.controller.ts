import { Request, Response } from "express";
import { OrganizationService } from "./organization.service";

interface IOrganizationController {
    create(req: Request, res: Response);
}

class OrganizationController implements IOrganizationController {
    constructor(private readonly organizationService: OrganizationService) {}

    async create(req: Request, res: Response) {
        const organization = this.organizationService.create(req.body);
        return res.status(201).json(organization);
    }
}

export { IOrganizationController, OrganizationController };