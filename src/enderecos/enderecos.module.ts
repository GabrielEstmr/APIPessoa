import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from 'src/pessoas/pessoas.module';
import { EnderecosController } from './enderecos.controller';
import { EnderecosService } from './enderecos.service';
import { EnderecoRepository } from './repository/EnderecoRepository';

@Module({
  imports: [
    TypeOrmModule.forFeature([EnderecoRepository]),
    PessoasModule
  ],
  controllers: [EnderecosController],
  providers: [EnderecosService],
  exports: [EnderecosService],
})
export class EnderecosModule { }



// @Module({
//   imports: [
//     TypeOrmModule.forFeature([PessoaRepository]),
//   ],
//   controllers: [PessoasController],
//   providers: [PessoasService],
//   exports: [PessoasService]
// })
// export class PessoasModule { }
