import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnderecosController } from './enderecos.controller';
import { EnderecosService } from './enderecos.service';
import { EnderecoRepository } from './repository/EnderecoRepository';

@Module({
  imports: [
    TypeOrmModule.forFeature([EnderecoRepository]),
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
