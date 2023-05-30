import { IsEmail, IsNotEmpty,IsOptional} from "class-validator";

export class UpdateUserDto{
    username:string;
    @IsEmail()
    @IsOptional()
    email:string;
    password:string;
}