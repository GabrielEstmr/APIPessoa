import { EntityRepository, getRepository, Repository } from "typeorm";
import { CriarEnderecoDTO } from "../dtos/criar.endereco.dto";
import { Endereco } from "../endereco.entity";
import IEnderecoRepository from "./EnderecosRepository.Interface";


// @EntityRepository(Endereco)
// export class EnderecoRepository implements IEnderecoRepository {

//     private ormRepository: Repository<Endereco>;

//     constructor() {
//         this.ormRepository = getRepository(Endereco);
//     }

//     public async save(data: CriarEnderecoDTO): Promise<void> {
//         await this.ormRepository.save(data);
//     }




// }


@EntityRepository(Endereco)
export class EnderecoRepository extends Repository<Endereco> {


    public async saveEnd(data: CriarEnderecoDTO): Promise<void> {
        await this.save(data);
    }




}