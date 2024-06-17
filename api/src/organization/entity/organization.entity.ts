import { Column, Entity } from "typeorm";
import { BaseEntity } from "../../common/base.entity";

@Entity()
export class Organization extends BaseEntity {
    @Column()
    name: string;

    @Column()
    cnpj: string;
}