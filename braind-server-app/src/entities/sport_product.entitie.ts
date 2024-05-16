import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'sport_products' })
export class SportProduct {
    @PrimaryGeneratedColumn()
    guid: number

    @Column()
    name: string;

    @Column()
    price: number;

    @Column()
    views: number;
}