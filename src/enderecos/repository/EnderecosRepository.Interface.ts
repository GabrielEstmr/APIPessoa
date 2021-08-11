import { CriarEnderecoDTO } from "../dtos/criar.endereco.dto";


export default interface IEnderecoRepository {
    saveEnd(data: CriarEnderecoDTO): Promise<void>;
}