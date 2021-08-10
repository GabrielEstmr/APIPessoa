import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreatePessoas1628522929992 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
        await queryRunner.createTable(
            new Table({
                name: 'TDPESSOA',
                columns: [
                    {
                        name: 'id',
                        type: 'uuid',
                        isPrimary: true,
                        generationStrategy: 'uuid',
                        default: 'uuid_generate_v4()'
                    },
                    {
                        name: 'tipo_pessoa',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: false
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        isNullable: false,
                        isUnique: false
                    },
                    {
                        name: 'razao_social',
                        type: 'varchar',
                        isNullable: true,
                        isUnique: false
                    },
                    {
                        name: 'CPF',
                        type: 'varchar',
                        isNullable: true,
                        isUnique: false
                    },
                    {
                        name: 'CNPJ',
                        type: 'varchar',
                        isNullable: true,
                        isUnique: false
                    },

                    {
                        name: 'sexo',
                        type: 'varchar',
                        isNullable: true,
                        isUnique: false
                    },
                    {
                        name: 'data_nascimento',
                        type: 'varchar',
                        isNullable: true,
                        isUnique: false
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        isNullable: true,
                        isUnique: false
                    },
                    {
                        name: 'telefone',
                        type: 'varchar',
                        isNullable: true,
                        isUnique: false
                    },
                    {
                        name: 'celular',
                        type: 'varchar',
                        isNullable: true,
                        isUnique: false
                    },
                    {
                        name: 'foto_url',
                        type: 'varchar',
                        isNullable: true,
                        isUnique: false
                    },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        default: 'now()'
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        default: 'now()'
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('TDCEP');
    }

}
