import { EntityRepository, Repository } from "typeorm";
import { Pessoa } from "../pessoas.entity";
import IPessoasRepository from "./PessoasRepository.Interface";
// import IPessoasRepository from "./PessoasRepository.Interface";


@EntityRepository(Pessoa)
export class PessoaRepository extends Repository<Pessoa> implements IPessoasRepository {

    public async saveData(data: Pessoa): Promise<void> {
        await this.save(data);
    }

    public async findByEmail(email: string): Promise<Pessoa | undefined> {
        return await this.findOne({ where: { email: email } });
    }

    public async updateData(data: Pessoa): Promise<void> {
        await this.delete({ email: data.email });
        await this.save(data);
    }

}