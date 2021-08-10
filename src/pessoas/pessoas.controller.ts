import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import { CriarPessoaDTO } from './dtos/criar.pessoa.dto';
import { Pessoa } from './pessoas.entity';
import { PessoasService } from './pessoas.service';

@Controller('pessoas')
export class PessoasController {

    private clientesService: PessoasService = undefined;

    constructor(clientesService: PessoasService) {
        this.clientesService = clientesService;
    }

    @Post()
    async criarPessoa(

        @Body()
        data: CriarPessoaDTO

    ): Promise<Pessoa> {
        return await this.clientesService.criarPessoa(data);
    }
}
