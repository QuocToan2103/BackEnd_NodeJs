import { Body, Controller, HttpCode, HttpStatus, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { SignInDto } from 'src/authentication/dtos/signIn.dto';
import { AuthenticationService } from 'src/authentication/services/authentication/authentication.service';

@Controller('authentication')
export class AuthenticationController {
constructor( private authenticationService: AuthenticationService){
}
@Post('/login')
@HttpCode(HttpStatus.OK)
@UsePipes(ValidationPipe)
signIn(@Body()signinInfor: SignInDto){
return this.authenticationService.signIn(signinInfor.username, signinInfor.password)
}
}
