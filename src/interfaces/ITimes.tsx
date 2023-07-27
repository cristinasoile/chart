import { IColaborador } from "./IColaborador";

export interface ITime {
  nome: string;
  corPrimaria: string;
  colaborador: IColaborador[],
};
