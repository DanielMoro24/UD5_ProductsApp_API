import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id!: Number;

    @Column()
    name!: String;

    @Column()
    description!: String;

    @Column()
    image!: String;

    @Column()
    amount!: Number;

    @Column()
    price!: Number;

    @Column()
    discountPrice!: Number;

    @Column()
    availability!: Boolean;
    
}