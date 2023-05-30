import {HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Post } from 'src/type_orm/entities/Post';
import { User } from 'src/type_orm/entities/User';
import { Profile } from 'src/type_orm/entities/UserProfile';
import { createUserParams, createUserPostsParams, createUserProfileParams, updateUserParams } from 'src/utils/type';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(User) private userRepository: Repository<User> ,
        @InjectRepository(Profile) private userProfileRepository: Repository<Profile>,
        @InjectRepository(Post) private userPostsRepository: Repository<Post>) {
    }
    getUsers(){
        return this.userRepository.find({relations:['profile','posts']});
    }
    getUserByName(name:string){
        const user = this.userRepository.findOneBy({username:name});
        if (!user) throw new HttpException('user not found',HttpStatus.NOT_FOUND);
        else {
            return user;
        }
    }
    createUser(userDetails : createUserParams){
        const newUser= this.userRepository.create({...userDetails, createAt: new Date()});
        return this.userRepository.save(newUser);
    }
    async updateUser(id:number ,updatedUserDetails: updateUserParams){
        const user= await this.userRepository.findOneBy({id})
        if(!user){
            throw new HttpException(`cant find a user with id ${id}`, HttpStatus.NOT_FOUND);
        }
        return this.userRepository.update({id},{...updatedUserDetails});

    }
    deleteUser(id:number){
        return this.userRepository.delete({id})
    }
    ////User Profile/////////////////////////////////////

    async createUserProfile(id:number,userProfileDetails: createUserProfileParams) {
        ;const user= await this.userRepository.findOneBy({id})
        if(!user){
            throw new HttpException('no user found',HttpStatus.NOT_FOUND)
        }
        const newProfile= this.userProfileRepository.create(userProfileDetails)
        const savedProfile= await this.userProfileRepository.save(newProfile)
        user.profile=savedProfile;
        return this.userRepository.save(user);
    }
    ///User Posts///////////////////////////////////

    async createUserPosts(id: number,userPosts: createUserPostsParams) {
        const user= await this.userRepository.findOneBy({id})
        if(!user){
            throw new HttpException('no user found',HttpStatus.NOT_FOUND)
        }
        const newPosts= this.userPostsRepository.create({...userPosts, user})
        return  await this.userPostsRepository.save(newPosts)
        
    }


}
