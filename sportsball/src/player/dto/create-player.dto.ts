import { IsDate, IsNotEmpty, IsNumber } from "class-validator";

export class CreatePlayerDto {ű
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    @IsNumber()
    goalCount: number;
    @IsNotEmpty()
    @IsDate()
    birthDate: Date;
    @IsNotEmpty()
    @IsNumber()
    teamId: number;
}
