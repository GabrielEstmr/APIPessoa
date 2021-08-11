import { EntityRepository, Repository } from "typeorm";
import { uuid } from "uuidv4";
import { Pessoa } from "../pessoas.entity";
import IPessoasRepository from "./PessoasRepository.Interface";

@EntityRepository(Pessoa)
class FakePessoaRepository extends Repository<Pessoa> implements IPessoasRepository {

    private _pessoa: Array<Pessoa> = [];

    constructor(pessoa: Array<Pessoa> = []) {
        super();
        this._pessoa = pessoa;
    }

    public async findByEmail(email: string): Promise<Pessoa | undefined> {
        const data = this._pessoa.filter((e) => {
            return e.email === email;
        });
        return data.length === 0 ? undefined : data[0];
    }

    public async saveData(data: Pessoa): Promise<void> {
        Object.assign(data, {
            id: uuid(),
            created_at: new Date(),
            updated_at: new Date(),
        })
    }

    public async updateData(data: Pessoa): Promise<void> {
        Object.assign(data, {
            id: uuid(),
            created_at: new Date(),
            updated_at: new Date(),
        })
    }


}

export default FakePessoaRepository;