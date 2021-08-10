import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Endereco } from 'src/enderecos/endereco.entity';
import { EnderecosService } from 'src/enderecos/enderecos.service';
import { CriarPessoaDTO } from './dtos/criar.pessoa.dto';
import { Pessoa } from './pessoas.entity';
import { PessoaRepository } from './repository/PessoasRepository';

@Injectable()
export class PessoasService {


    constructor(

        private readonly enderecoService: EnderecosService,

        @InjectRepository(PessoaRepository)
        private pessoaRepository: PessoaRepository,

    ) { }



    async criarPessoa(data: CriarPessoaDTO) {

        const pessoa = this.fromDTO(data);
        const { email } = data;
        const pessoaAlreadyExits = await this.pessoaRepository.findByEmail(email);

        if (pessoaAlreadyExits) {
            throw new BadRequestException(`Pessoa com o email ${email} já cadastrada no sistema`)
        }

        await this.pessoaRepository.saveData(pessoa);


        let enderecoArray: Array<Endereco>;
        data.enderecos.forEach(async e => {
            e.pessoa_id = pessoa.id;
            const endereco = await this.enderecoService.criarEndereco(e);
            enderecoArray.push(endereco);
        });

        return pessoa;


    }

    fromDTO(data: CriarPessoaDTO): Pessoa {

        const pessoa = new Pessoa();

        pessoa.CNPJ = data.CNPJ;
        pessoa.CPF = data.CPF;
        pessoa.celular = data.celular;
        pessoa.email = data.data_nascimento;
        pessoa.email = data.email;
        pessoa.foto_url = data.foto_url;
        pessoa.nome = data.nome;
        pessoa.razao_social = data.razao_social;
        pessoa.sexo = data.sexo;
        pessoa.telefone = data.telefone;
        pessoa.tipo_pessoa = data.tipo_pessoa;

        return pessoa;

    }

}
