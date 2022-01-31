import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id!: Number;

    @Column()
    Username!: String;

    @Column()
    name!: String;

    @Column()
    Surname!: String;

    @Column()
    email!: String;

    @Column()
    age!: number;

    @Column()
    level!: String;
    
}