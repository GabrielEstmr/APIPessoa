import { CriarEnderecoDTO } from "../dtos/criar.endereco.dto";


export default interface IEnderecoRepository {
    save(data: CriarEnderecoDTO): Promise<void>;
}