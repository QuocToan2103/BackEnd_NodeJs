import{ Column, Entity, PrimaryGeneratedColumn } from 'typeorm'
@Entity({name:'user-profiles'})
export class Profile{
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    firstname: string;
    @Column()
    lastname: string;
    @Column()
    age: number;
    @Column()
    dob:string;
    
}