import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecosModule } from 'src/enderecos/enderecos.module';
import { PessoasController } from './pessoas.controller';
import { Pessoa } from './pessoas.entity';
import { PessoasService } from './pessoas.service';
import { PessoaRepository } from './repository/PessoasRepository';



@Module({
  imports: [
    TypeOrmModule.forFeature([PessoaRepository]),
    EnderecosModule
  ],
  controllers: [PessoasController],
  providers: [PessoasService],
  exports: [PessoasService]
})
export class PessoasModule { }
