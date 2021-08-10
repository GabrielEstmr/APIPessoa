import { Pessoa } from "../pessoas.entity";


export default interface IPessoasRepository {
    saveData(data: Pessoa): Promise<void>;
    updateData(data: Pessoa): Promise<void>;
    findByEmail(email: string): Promise<Pessoa | undefined>;
}