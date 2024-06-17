import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "../../common/base.entity";
import { DonationsCategory } from "./donations-category";
import { Organization } from "../../organization/entity/organization.entity";

@Entity()
export class CollectionPoint extends BaseEntity {
    @ManyToOne(() => Organization, (organization) => organization.id, { eager: true })
    @JoinColumn()
    organization: Organization;

    @Column()
    state: string;

    @Column()
    city: string;

    @Column()
    street: string;

    @Column()
    zipCode: string;

    @Column({ type: "enum", enum: DonationsCategory, array: true })
    donationCategories: DonationsCategory[]
}