import { EntityRepository, getRepository, Repository } from "typeorm";
import { CriarPessoaDTO } from "../dtos/criar.pessoa.dto";
import { Pessoa } from "../pessoas.entity";
import IPessoasRepository from "./PessoasRepository.Interface";


// @EntityRepository(Pessoa)
// export class PessoaRepository implements IPessoasRepository {

//     private ormRepository: Repository<Pessoa>;

//     constructor() {
//         this.ormRepository = getRepository(Pessoa);
//     }

//     public async save(data: CriarPessoaDTO): Promise<void> {
//         await this.ormRepository.save(data);
//     }

//     public async findByEmail(email: string): Promise<Pessoa | undefined> {
//         return await this.ormRepository.findOne({ where: { email: email } });
//     }

//     public async update(data: CriarPessoaDTO): Promise<void> {
//         await this.ormRepository.delete({ email: data.email });
//         await this.ormRepository.save(data);
//     }



// }


@EntityRepository(Pessoa)
export class PessoaRepository extends Repository<Pessoa> {

    // private ormRepository: Repository<Pessoa>;

    // constructor() {
    //     this.ormRepository = getRepository(Pessoa);
    // }

    public async savePessoa(data: CriarPessoaDTO): Promise<void> {
        await this.save(data);
    }

    public async findByEmailPessoa(email: string): Promise<Pessoa | undefined> {
        return await this.findOne({ where: { email: email } });
    }

    public async updatePessoa(data: CriarPessoaDTO): Promise<void> {
        await this.delete({ email: data.email });
        await this.save(data);
    }



}