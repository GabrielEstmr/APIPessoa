import { CriarPessoaDTO } from "../dtos/criar.pessoa.dto";
import { Pessoa } from "../pessoas.entity";


export default interface IPessoasRepository {
    save(data: CriarPessoaDTO): Promise<void>;
    update(data: CriarPessoaDTO): Promise<void>;
    findByEmail(email: string): Promise<Pessoa | undefined>;
}