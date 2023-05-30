import {Entity, PrimaryGeneratedColumn,Column, OneToOne, JoinColumn, OneToMany} from 'typeorm';
import { Profile } from './UserProfile';
import { Post } from './Post';


@Entity({name:'users'})
export class User{
@PrimaryGeneratedColumn({type:'bigint'})
id: number;
@Column()
username: string;
@Column()
email: string;
@Column()
password: string;
@Column()
createAt: Date;
@Column({nullable:true})
authStrategy: string;


//relationships
@OneToOne(()=> Profile)
@JoinColumn()
profile: Profile

//
@OneToMany(()=>Post, (post)=>post.user)
posts: Post[];

}