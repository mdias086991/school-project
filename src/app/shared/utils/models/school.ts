import { Classes } from "./classes";

export interface School {
  id?: number;
  name: string;
  diretor: string;
  cnpj: string;
  telefone?: string;
  cep: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  turmas?: Classes[];
}
