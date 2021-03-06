import { EntityRepository, Repository } from "typeorm";
import { CriarEnderecoDTO } from "../dtos/criar.endereco.dto";
import { Endereco } from "../endereco.entity";
import IEnderecoRepository from "./EnderecosRepository.Interface";

@EntityRepository(Endereco)
export class EnderecoRepository extends Repository<Endereco> implements IEnderecoRepository {


    public async saveEnd(data: CriarEnderecoDTO): Promise<void> {
        await this.save(data);
    }




}