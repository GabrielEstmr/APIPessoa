import { BadRequestException } from '@nestjs/common';
import { CriarPessoaDTO } from '../dtos/criar.pessoa.dto';
import { TipoPessoa } from '../interfaces/TipoPessoa.interface';


export class ValidationDadosPessoa {

    private readonly TipoPessoaPermitidos = [
        TipoPessoa.PESSOA_FISICA,
        TipoPessoa.PESSOA_JURIDICA,
    ];

    transform(data: CriarPessoaDTO) {
        const status = data.tipo_pessoa;

        if (!this.checkTipoPessoa(status)) {
            throw new BadRequestException(`${status} é um status inválido`);
        }

        if (status === TipoPessoa.PESSOA_FISICA) {
            if (!data.CPF) {
                throw new BadRequestException(`CFP é um valor inválido`);
            }
            if (!data.sexo) {
                throw new BadRequestException(`Sexo é um valor inválido`);
            }
            if (!data.data_nascimento) {
                throw new BadRequestException(`Data Nascimento é um valor inválido`);
            }
        } else {
            if (!data.razao_social) {
                throw new BadRequestException(`Razao Social é um valor inválido`);
            }
            if (!data.CNPJ) {
                throw new BadRequestException(`CNPJ é um valor inválido`);
            }
        }

        return data;
    }

    private checkTipoPessoa(status: any) {
        const idx = this.TipoPessoaPermitidos.indexOf(status);
        return idx !== -1;
    }
}