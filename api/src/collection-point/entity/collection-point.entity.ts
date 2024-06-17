import { Column, Entity, JoinColumn, OneToOne } from "typeorm";
import { BaseEntity } from "../../common/base.entity";
import { DonationsCategory } from "./donations-category";

@Entity()
export class CollectionPoint extends BaseEntity {
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