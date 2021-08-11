
import { EntityRepository, Repository } from "typeorm";
import { uuid } from "uuidv4";
import { CriarEnderecoDTO } from "../dtos/criar.endereco.dto";
import { Endereco } from "../endereco.entity";
import IEnderecoRepository from "./EnderecosRepository.Interface";


@EntityRepository(Endereco)
class FakeEnderecoRepository extends Repository<Endereco> implements IEnderecoRepository {


    public async saveEnd(data: CriarEnderecoDTO): Promise<void> {
        Object.assign(data, {
            id: uuid(),
            created_at: new Date(),
            updated_at: new Date(),
        })
    }



}

export default FakeEnderecoRepository;