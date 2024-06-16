import { Router } from "express";
import { OrganizationController } from "./organization.controller";
import { OrganizationService } from "./organization.service";
import { OrganizationRepository } from "./organization.repository";


const organizationRouter = Router();