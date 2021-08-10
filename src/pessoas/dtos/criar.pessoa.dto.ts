import { ArrayMinSize, IsArray, IsNotEmpty, IsString } from "class-validator";
import { CriarEnderecoDTO } from "src/enderecos/dtos/criar.endereco.dto";

export class CriarPessoaDTO {


    @IsString()
    @IsNotEmpty()
    tipo_pessoa: string;

    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    razao_social: string;

    @IsString()
    CPF: string;

    @IsString()
    CNPJ: string;

    @IsString()
    sexo: string;

    @IsString()
    data_nascimento: string;

    @IsString()
    email: string;

    @IsString()
    telefone: string;

    @IsString()
    celular: string;

    @IsString()
    foto_url: string;

    @IsArray()
    @ArrayMinSize(1)
    enderecos: Array<CriarEnderecoDTO>

}