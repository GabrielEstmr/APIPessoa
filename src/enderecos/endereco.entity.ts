import { Column, CreateDateColumn, UpdateDateColumn, Entity, PrimaryGeneratedColumn, JoinColumn, ManyToOne } from 'typeorm';
import { Pessoa } from './pessoas.entity';



@Entity('TDEND')
export class Endereco {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    endereco: string;

    @Column()
    numero: string;

    @Column()
    complemento: string;

    @Column()
    bairro: string;

    @Column()
    cidade: string;

    @Column()
    estado: string;

    @Column()
    cep: string;

    @Column()
    pessoa_id: string;

    // @ManyToOne(() => Pessoa)
    // @JoinColumn({ name: 'pessoa_id' })
    // pessoa: Pessoa;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}
