import React from 'react'
import { ITeste } from '../../App'
import { IColaborador } from '../../interfaces/IColaborador'
import Botao from '../Botao'
import Campotexto from '../CampoTexto'

export interface IFormsNovoTime {
  aoSalvarTime: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  teste: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  placeholder: string,
  valor: string,
}

function FormsNovoTime({aoSalvarTime, teste, placeholder, valor }: IFormsNovoTime) {
  return (
    <div>
      <form
          onSubmit={aoSalvarTime}
          className="flex-1 bg-fundo-claro rounded-3xl py-9 px-16 shadow-sombra">
          <h2 className="tiny:text-base font-serif text-neutral-800 text-[32px] font-normal sm:text-3xl">Preencha os dados para criar um novo time.</h2>
          <Campotexto
            type='text'
            obrigatorio
            label='Novo Time'
            placeholder={placeholder}
            valor={valor}
            teste={teste}
          />
          <Campotexto
          type='color'
          label='Cor'
          obrigatorio
          placeholder='Selecione a cor do time'
          valor={valor}
          teste={teste}
            />
          <Botao>
            Criar novo Time
          </Botao>
        </form>
    </div>
  )
}

export default FormsNovoTime
