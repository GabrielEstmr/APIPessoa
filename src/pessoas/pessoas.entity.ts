import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';



@Entity('TDPESSOA')
export class Pessoa extends BaseEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    tipo_pessoa: string;

    @Column()
    nome: string;

    @Column()
    razao_social: string;

    @Column()
    CPF: string;

    @Column()
    CNPJ: string;

    @Column()
    sexo: string;

    @Column()
    data_nascimento: string;

    @Column()
    email: string;

    @Column()
    telefone: string;

    @Column()
    celular: string;

    @Column()
    foto_url: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}