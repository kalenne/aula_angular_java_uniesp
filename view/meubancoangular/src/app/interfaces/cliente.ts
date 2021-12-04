export interface ICliente {
  id?: number;
  nome: string;
  email: string;
  cpf: string;
  ativo?: boolean; /*a interrogação é algo como não obrigatório*/
  observacoes:string;
}
