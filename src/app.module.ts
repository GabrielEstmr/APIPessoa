import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from './pessoas/pessoas.module';
import { EnderecosModule } from './enderecos/enderecos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    PessoasModule,
    EnderecosModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
