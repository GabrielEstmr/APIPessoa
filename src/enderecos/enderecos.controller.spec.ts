import { EnderecosService } from "../enderecos/enderecos.service";
import FakeEnderecoRepository from "../enderecos/repository/FakeEnderecoRepository";
import { CriarEnderecoDTO } from "./dtos/criar.endereco.dto";
import { EnderecosController } from "./enderecos.controller";


describe('EnderecosController', () => {

  const fakeEnderecoRepository = new FakeEnderecoRepository();

  const fakeEnderecoService = new EnderecosService(fakeEnderecoRepository);

  const enderecoController = new EnderecosController(fakeEnderecoService);


  const valueCreateEnderecoDTO: CriarEnderecoDTO = {

    endereco: "string",
    numero: "string",
    complemento: "string",
    bairro: "string",
    cidade: "string",
    estado: "string",
    cep: "string"


  }

  it('should create an addresses', async () => {

    const result = await enderecoController.criarPessoa(valueCreateEnderecoDTO);

    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('created_at');
    expect(result).toHaveProperty('updated_at');

    for (const property in valueCreateEnderecoDTO) {
      expect(result[property]).toEqual(valueCreateEnderecoDTO[property]);
    }

  });

  it('should return an error caused by null values of Address Data', async () => {

    const requiredFieldsPerson = [
      'endereco',
      'numero',
      'cidade',
      'estado',
      'cep',
    ];

    requiredFieldsPerson.forEach(e => {
      const inputValueDTO = { ...valueCreateEnderecoDTO };
      inputValueDTO[e] = '';
      expect(async () => { await enderecoController.criarPessoa(inputValueDTO) }).rejects.toThrowError;
    })

  });




});


