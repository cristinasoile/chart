import React from 'react'
import { ITeste } from '../../App'
import { IColaborador } from '../../interfaces/IColaborador'
import Botao from '../Botao'
import Campotexto from '../CampoTexto'

export interface IFormsNovoTime {
  aoSalvarTime: (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  alterarEstado: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  alterarCorTime: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  fecharModal: () => void,
  placeholder: string,
  valor: string,
  corTime: string,
}

function FormsNovoTime({ aoSalvarTime, alterarEstado, alterarCorTime, placeholder, valor, corTime, fecharModal }: IFormsNovoTime) {

  return (

    <div className=" fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" >
      <form
        onSubmit={aoSalvarTime}
        className="sm:max-w-[52%] flex-1 mx-4  bg-fundo-claro rounded-3xl py-9 px-16 shadow-sombra">
        <h2 className="tiny:text-base font-serif text-neutral-800 text-[32px] font-normal sm:text-3xl">Preencha os dados para criar um novo time.</h2>
        <Campotexto
          type='text'
          obrigatorio
          label='Novo Time'
          placeholder={placeholder}
          valor={valor}
          alterarEstado={alterarEstado}
        />
        <Campotexto
          type='color'
          label='Cor'
          obrigatorio
          placeholder='Selecione a cor do time'
          valor={corTime}
          alterarEstado={alterarCorTime}
        />
        <div className='flex flex-wrap justify-between'>
          <button
            className="rounded-lg bg-roxinho w-40 h-20 mt-10 px-2 font-sans text-center text-white text-xl font-bold hover:text-yellow-400"
            onClick={aoSalvarTime}>
            Criar novo Time
          </button>
          <button
            className="rounded-lg bg-roxinho w-40 h-20 mt-10 px-2 font-sans text-center text-white text-xl font-bold hover:text-yellow-400"
            onClick={fecharModal}>
            cancelar
          </button>
        </div>
      </form>
    </div>
  )
}

export default FormsNovoTime
