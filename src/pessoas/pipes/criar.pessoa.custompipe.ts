import { PipeTransform, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { TipoPessoa } from '../interfaces/TipoPessoa.interface';


export class CriarPessoaCustomPipe implements PipeTransform {

    private readonly TipoPessoaPermitidos = [
        TipoPessoa.PESSOA_FISICA,
        TipoPessoa.PESSOA_JURIDICA,
    ];

    transform(value: any) {
        const status = value.status.toUpperCase();

        if (!this.ehStatusValido(status)) {
            throw new BadRequestException(`${status} é um status inválido`);
        }

        return value;
    }

    private ehStatusValido(status: any) {
        const idx = this.TipoPessoaPermitidos.indexOf(status);
        return idx !== -1;
    }
}