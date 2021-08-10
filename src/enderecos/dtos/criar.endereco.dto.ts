import { IsNotEmpty, IsString } from "class-validator";


export class CriarEnderecoDTO {



    @IsString()
    @IsNotEmpty()
    endereco: string;

    @IsString()
    @IsNotEmpty()
    numero: string;

    @IsString()
    complemento?: string;

    @IsString()
    bairro?: string;

    @IsString()
    @IsNotEmpty()
    cidade: string;

    @IsString()
    @IsNotEmpty()
    estado: string;

    @IsString()
    @IsNotEmpty()
    cep: string;

    @IsString()
    pessoa_id?: string;


}