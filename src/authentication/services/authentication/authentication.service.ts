import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthenticationService {
    constructor(private userService: UsersService){

    }
    async signIn(username:string, pass:string): Promise<any>{
        const user = await this.userService.getUserByName(username);
        if (user?.password!==pass){
            throw new HttpException('Password is incorrect for the user',HttpStatus.UNAUTHORIZED)
        }
        const {password,...userInfor} = user
        return userInfor;
    }
}
