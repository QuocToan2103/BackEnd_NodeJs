import {TypeOrmModuleOptions } from '@nestjs/typeorm'
import { Post } from 'src/type_orm/entities/Post'
import { User } from 'src/type_orm/entities/User'
import { Profile } from 'src/type_orm/entities/UserProfile'
export const typeormconfig :TypeOrmModuleOptions={
    type:"postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database:"mystore",
    synchronize: true,
    entities: [User,Profile,Post],
}