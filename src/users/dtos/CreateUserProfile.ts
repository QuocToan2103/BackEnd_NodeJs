import { IsNotEmpty, IsNumber } from 'class-validator'
export class CreateUserProfileDto{
    @IsNotEmpty()
    firstname:string;
    @IsNotEmpty()
    lastname:string;
    @IsNumber()
    age :number;
    @IsNotEmpty()
    dob: string;
}