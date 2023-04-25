import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength, minLength } from "class-validator";

export class CreateProductDto {
    
    @IsNotEmpty()
    @IsString()
    @MinLength(4)
    name: string;

    @IsNotEmpty()
    @IsString()
    @MinLength(10)
    description: string;

    @IsNotEmpty()
    @IsNumber()
    rating: number;

    @IsOptional()
    color: string;
}
