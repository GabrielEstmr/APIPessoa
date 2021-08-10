import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarPessoaDTO } from './dtos/criar.pessoa.dto';
import { Pessoa } from './pessoas.entity';
import { PessoasService } from './pessoas.service';
import { CriarPessoaCustomPipe } from './pipes/criar.pessoa.custompipe';


@Controller('pessoas')
export class PessoasController {

    private readonly clientesService: PessoasService = undefined;

    constructor(clientesService: PessoasService) {
        this.clientesService = clientesService;
    }

    @Post()
    @UsePipes(ValidationPipe)
    async criarPessoa(

        @Body(CriarPessoaCustomPipe)
        data: CriarPessoaDTO

    ): Promise<Pessoa> {
        return await this.clientesService.criarPessoa(data);
    }
}
