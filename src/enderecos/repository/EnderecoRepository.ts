import { EntityRepository, Repository } from "typeorm";
import { CriarEnderecoDTO } from "../dtos/criar.endereco.dto";
import { Endereco } from "../endereco.entity";

@EntityRepository(Endereco)
export class EnderecoRepository extends Repository<Endereco> {


    public async saveEnd(data: CriarEnderecoDTO): Promise<void> {
        await this.save(data);
    }




}