import { PipeTransform, BadRequestException } from '@nestjs/common';
import { CriarPessoaDTO } from '../dtos/criar.pessoa.dto';
import { TipoPessoa } from '../interfaces/TipoPessoa.interface';


export class CriarPessoaCustomPipe implements PipeTransform {

    private readonly TipoPessoaPermitidos = [
        TipoPessoa.PESSOA_FISICA,
        TipoPessoa.PESSOA_JURIDICA,
    ];

    transform(value: CriarPessoaDTO) {
        const status = value.tipo_pessoa;

        if (!this.ehStatusValido(status)) {
            throw new BadRequestException(`${status} é um status inválido`);
        }

        if (status === TipoPessoa.PESSOA_FISICA) {
            if (!value.CPF) {
                throw new BadRequestException(`CFP é um valor inválido`);
            }
            if (!value.sexo) {
                throw new BadRequestException(`Sexo é um valor inválido`);
            }
            if (!value.data_nascimento) {
                throw new BadRequestException(`Data Nascimento é um valor inválido`);
            }
        } else {
            if (!value.razao_social) {
                throw new BadRequestException(`Razao Social é um valor inválido`);
            }
            if (!value.CNPJ) {
                throw new BadRequestException(`CNPJ é um valor inválido`);
            }
        }

        return value;
    }

    private ehStatusValido(status: any) {
        const idx = this.TipoPessoaPermitidos.indexOf(status);
        return idx !== -1;
    }
}