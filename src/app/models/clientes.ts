import { Endereco } from './endereco';
export interface Cliente {
  id?: any,
  nome?: string,
  dataNascimento?: any;
  sexo?: string,
  endereco?: Endereco[];
}
