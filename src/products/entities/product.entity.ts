import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'products'})
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column({ type: "float" })
    price: string;

    @Column({ type: "integer" })
    rating: number;

    @Column({ default: 'primary' })
    color: string;
}
