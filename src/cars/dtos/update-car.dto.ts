import { IsOptional, IsString, IsUUID } from "class-validator";

export class updateCartDto {
    @IsString()
    @IsUUID()
    @IsOptional() // digo que es opcional desde nest
    readonly id?: String; // con el ? indico que es opcional desde types

    @IsString()
    @IsOptional()
    readonly brand: string;

    @IsString() // puedo llenarlo de validaciones/ decoradores
    //@MinLength(3)
    @IsOptional()
    readonly model: string
}