import { EnderecosService } from "../enderecos/enderecos.service";
import FakeEnderecoRepository from "../enderecos/repository/FakeEnderecoRepository";
import { CriarPessoaDTO } from "./dtos/criar.pessoa.dto";
import { PessoasController } from "./pessoas.controller";
import { PessoasService } from "./pessoas.service";
import FakePessoaRepository from "./repository/FakePessoasRepository";

describe('PessoasController', () => {

  const fakePessoaRepository = new FakePessoaRepository();
  const fakeEnderecoRepository = new FakeEnderecoRepository();

  const fakeEnderecoService = new EnderecosService(fakeEnderecoRepository);
  const pessoasService = new PessoasService(fakeEnderecoService, fakePessoaRepository);

  const pessoasController = new PessoasController(pessoasService);

  const objectInput = {
    tipo_pessoa: "PESSOA_FISICA",
    nome: "Gabriel",
    razao_social: "string",
    CPF: "string",
    CNPJ: "string",
    sexo: "string",
    data_nascimento: "string",
    email: "email4",
    telefone: "string",
    celular: "string",
    foto_url: "string",
  }

  const valueCreatePessoaDTO: CriarPessoaDTO = {

    ...objectInput,
    enderecos: [
      {
        endereco: "string",
        numero: "string",
        complemento: "string",
        bairro: "string",
        cidade: "string",
        estado: "string",
        cep: "string"
      },
      {
        endereco: "string",
        numero: "string",
        complemento: "string",
        bairro: "string",
        cidade: "string",
        estado: "string",
        cep: "string"
      }
    ]

  }

  it('should create a person with its addresses', async () => {



    const result = await pessoasController.criarPessoa(valueCreatePessoaDTO);

    expect(result).toHaveProperty('id');
    expect(result).toHaveProperty('created_at');
    expect(result).toHaveProperty('updated_at');

    for (const property in objectInput) {
      console.log(property)
      if (property !== 'enderecos') {
        expect(result[property]).toEqual(valueCreatePessoaDTO[property]);
        expect(result[property]).toEqual(valueCreatePessoaDTO[property]);
      }

    }

  });

  it('should return an error caused by null values of Person Data => case: PESSOA_FISICA', async () => {

    const requiredFieldsPerson = [
      'nome',
      'CPF',
      'sexo',
      'data_nascimento',
    ];

    requiredFieldsPerson.forEach(e => {
      const inputValueDTO = { ...valueCreatePessoaDTO };
      inputValueDTO.tipo_pessoa = "PESSOA_FISICA"
      inputValueDTO[e] = '';
      expect(async () => { await pessoasController.criarPessoa(inputValueDTO) }).rejects.toThrowError;
    })

  });


  it('should return an error caused by null values of Person Data => case: PESSOA_JURIDICA', async () => {

    const requiredFieldsPerson = [
      'tipo_pessoa',
      'nome',
      'razao_social',
      'CNPJ',
    ];

    requiredFieldsPerson.forEach(e => {
      const inputValueDTO = { ...valueCreatePessoaDTO };
      inputValueDTO.tipo_pessoa = "PESSOA_JURIDICA"
      inputValueDTO[e] = '';
      expect(async () => { await pessoasController.criarPessoa(inputValueDTO) }).rejects.toThrowError;
    })

  });


  it('should return an error caused by null values of Address Data', async () => {

    const requiredFieldsAddress = [
      'endereco',
      'numero',
      'cidade',
      'estado',
      'cep',
    ];

    requiredFieldsAddress.forEach(e => {
      const inputValueDTO = { ...valueCreatePessoaDTO };
      inputValueDTO['enderecos'][e] = '';
      expect(async () => { await pessoasController.criarPessoa(inputValueDTO) }).rejects.toThrowError;
    })

  });


});


