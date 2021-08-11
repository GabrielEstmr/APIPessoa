import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CriarEnderecoDTO } from './dtos/criar.endereco.dto';
import { Endereco } from './endereco.entity';
import { EnderecosService } from './enderecos.service';

@Controller('enderecos')
export class EnderecosController {

    private enderecosService: EnderecosService = undefined;

    constructor(clientesService: EnderecosService) {
        this.enderecosService = clientesService;
    }

    @Post()
    @UsePipes(ValidationPipe)
    async criarPessoa(

        @Body()
        data: CriarEnderecoDTO

    ): Promise<Endereco> {
        return await this.enderecosService.criarEndereco(data);
    }
}
