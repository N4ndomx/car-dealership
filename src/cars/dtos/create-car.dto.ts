import { IsString, MinLength } from "class-validator";
// Esto es un DTO
export class createCarDto {
    @IsString()
    readonly brand: string;

    @IsString() // puedo llenarlo de validaciones/ decoradores
    //@MinLength(3)
    readonly model: string
}