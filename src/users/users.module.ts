import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/type_orm/entities/User';
import { Profile } from 'src/type_orm/entities/UserProfile';
import { Post } from 'src/type_orm/entities/Post';

@Module({
  imports: [TypeOrmModule.forFeature([User,Profile,Post])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}
