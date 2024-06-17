import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "../../common/base.entity";
import { CollectionPoint } from "../../collection-point/entity/collection-point.entity";

@Entity()
export class Organization extends BaseEntity {
    @Column()
    name: string;

    @Column()
    cnpj: string;

    @OneToMany(() => CollectionPoint, (collectionPoint) => collectionPoint.organization)
    @JoinColumn()
    collectionPoints: CollectionPoint[];
}