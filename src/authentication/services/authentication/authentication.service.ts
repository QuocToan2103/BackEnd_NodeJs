import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/services/users/users.service';

@Injectable()
export class AuthenticationService {
    constructor(private userService: UsersService,
        private jwtService: JwtService){


    }
    async signIn(username:string, pass:string): Promise<any>{
        const user = await this.userService.getUserByName(username);
        if (user?.password!==pass){
            throw new HttpException('Password is incorrect for the user',HttpStatus.UNAUTHORIZED)
        }
        const payload = {sub: user.id, password: user.username}
        return {access_token: await this.jwtService.signAsync(payload)}
    }
}
