import { Body, Controller, Delete, Get, HttpCode, Param, ParseIntPipe, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dtos/CreateNewUser.dto';
import { CreateUserPostDto } from 'src/users/dtos/CreateUserPost.dto';
import { CreateUserProfileDto } from 'src/users/dtos/CreateUserProfile';
import { UpdateUserDto } from 'src/users/dtos/UpdateUser.dto';
import { UsersService } from 'src/users/services/users/users.service'; 
@Controller('users')
export class UsersController {
    constructor(private userService: UsersService){}
    @Get()
    async getUsers(){
      const users= await this.userService.getUsers();
      return users
    }
    @Post()
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    createUser(@Body() createUserData: CreateUserDto ){
        this.userService.createUser(createUserData)
        return 'User created successfully'
    }
    @Put(':id')
    @HttpCode(200)
    @UsePipes(ValidationPipe)
    async updateUser(@Param('id',ParseIntPipe) id: number, @Body() updateUserData: UpdateUserDto){
        return await  this.userService.updateUser(id, updateUserData)
    }
    @Delete(':id')
    async deleteUser(@Param('id') id: number){
        await this.userService.deleteUser(id)
    }
    @Post(':id/profile')
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    async createUserProfile(@Param('id',ParseIntPipe) id: number ,@Body() userProfile: CreateUserProfileDto){
        return await this.userService.createUserProfile(id, userProfile);
    }
    @Post(':id/posts')
    @UsePipes(ValidationPipe)
    @HttpCode(200)
    async createUserPost(@Param('id',ParseIntPipe) id: number, @Body() userPost: CreateUserPostDto){
        return await this.userService.createUserPosts(id, userPost);
    }
    
}
