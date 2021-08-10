import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoasModule } from './pessoas/pessoas.module';
import { EnderecosModule } from './enderecos/enderecos.module';
import { Connection } from 'typeorm';

import * as typeOrmConfig from './typeorm.config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    PessoasModule,
    EnderecosModule
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {
  constructor(private connection: Connection) { }
}




// @Module({
//   imports: [
//     TypeOrmModule.forRoot(),
//     PessoasModule,
//     EnderecosModule
//   ],
//   controllers: [],
//   providers: [],
//   exports: [],
// })
// export class AppModule { }