import { IColaborador } from "./IColaborador";

export interface ITime {
  nome: string;
  corPrimaria: string;
  corSecundaria: string;
  colaborador: IColaborador[],
  // excluir: (colaborador: IColaborador) => void,

};
