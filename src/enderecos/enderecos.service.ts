import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CriarEnderecoDTO } from './dtos/criar.endereco.dto';
import { Endereco } from './endereco.entity';
import { EnderecoRepository } from './repository/EnderecoRepository';
import IEnderecoRepository from './repository/EnderecosRepository.Interface';

@Injectable()
export class EnderecosService {

    constructor(

        @InjectRepository(EnderecoRepository)
        private enderecoRepository: IEnderecoRepository,

    ) { }


    async criarEndereco(data: CriarEnderecoDTO): Promise<Endereco> {
        const endereco = this.fromDTO(data)
        await this.enderecoRepository.saveEnd(endereco);
        return endereco;
    }

    fromDTO(data: CriarEnderecoDTO): Endereco {
        const endereco = new Endereco();

        endereco.bairro = data.bairro;
        endereco.cep = data.cep;
        endereco.cidade = data.cidade;
        endereco.complemento = data.complemento;
        endereco.endereco = data.endereco;
        endereco.estado = data.estado;
        endereco.numero = data.numero;
        endereco.pessoa_id = data.pessoa_id ? data.pessoa_id : undefined;

        return endereco;
    }
}
