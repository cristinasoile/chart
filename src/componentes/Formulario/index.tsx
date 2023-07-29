import React, { useState } from 'react'
import { IColaborador } from '../../interfaces/IColaborador'
import Botao from '../Botao'
import Campotexto from '../CampoTexto'
import ListaCargos from '../ListaCargos'
import { v4 as uuidv4 } from 'uuid';
import { ICadastrarTimes } from '../../interfaces/ICadastrarTimes'
import { ITeste } from '../../App'
import FormsNovoTime from './FormsNovoTime'
// import FormsNovoTime from './FormsNovoTime'


export interface FormularioProps {
  aoColaborador: (colaborador: IColaborador) => void,
  cadastrarTime: (time: ITeste) => void,
  itens: string[],
}


export default function Formulario({ cadastrarTime, aoColaborador, itens }: FormularioProps) {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('Back-End');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');
  const [open, setOpen] = useState(false)

  const handleChange = (setState: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setState(e.target.value);
  }

  const handleButton = () => {
    setOpen(true)
  }

  const aoSalvar = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    aoColaborador({
      nome,
      cargo,
      imagem,
      time,
      id: uuidv4(),

    })
    setNome('')
    setCargo('')
    setImagem('')
    setTime('Back-End')
  }

  const aoSalvarTime = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault()
    cadastrarTime({
      id: uuidv4(),
      nomeArea: nomeTime,
      corPrimaria: corTime,
    })
    setNomeTime('')
    setCorTime('')
    setOpen(false)

  }

  return (
    <section className="flex flex-wrap gap-4 justify-center my-20">
      <form
        onSubmit={aoSalvar}
        className="max-w-[80%] bg-fundo-claro rounded-3xl py-9 px-16 shadow-sombra">
        <h2 className="tiny:text-base font-serif text-neutral-800 text-[32px] font-normal sm:text-3xl">Preencha os dados para criar o card do colaborador</h2>
        <Campotexto
          obrigatorio
          type='text'
          label='Nome'
          placeholder='Digite seu nome'
          valor={nome}
          teste={handleChange(setNome)}
        />
        <Campotexto
          type='text'
          label='Cargo'
          obrigatorio
          placeholder='Digite seu cargo'
          valor={cargo}
          teste={handleChange(setCargo)}
        />
        <Campotexto
          type='text'
          obrigatorio
          label='Perfil do github'
          placeholder='elzasoares'
          valor={imagem}
          teste={handleChange(setImagem)}
        />
        <ListaCargos
          obrigatorio
          label='Time'
          itens={itens}
          valor={time}
          teste={handleChange(setTime)}
        />
        <div className='flex flex-wrap justify-between'>

          <Botao >
            Criar card
          </Botao>
          <button
            className="rounded-lg bg-roxinho w-40 h-20 mt-10 px-2 font-sans text-center text-white text-xl font-bold hover:text-yellow-400"
            onClick={handleButton}>
            Adicionar Time
          </button>
        </div>

      </form>
      {open &&
        <div className=" fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <form
            // onSubmit={aoSalvarTime}
            className=" sm:max-w-[52%] flex-1 mx-4  bg-fundo-claro rounded-3xl py-9 px-16 shadow-sombra">
            <h2 className="tiny:text-base font-serif text-neutral-800 text-[32px] font-normal sm:text-3xl">Preencha os dados para criar um novo time.</h2>
            <Campotexto
              type='text'
              obrigatorio
              label='Novo Time'
              placeholder='Digite nome do time'
              valor={nomeTime}
              teste={handleChange(setNomeTime)}
            />
            <Campotexto
              type='color'
              label='Cor'
              obrigatorio
              placeholder='Selecione a cor do time'
              valor={corTime}
              teste={handleChange(setCorTime)}
            />
            <div className='flex flex-wrap justify-between'>

              <button
                className="rounded-lg bg-roxinho w-40 h-20 mt-10 px-2 font-sans text-center text-white text-xl font-bold hover:text-yellow-400"
                onClick={aoSalvarTime}>
                Criar novo Time
              </button>
              <button
                className="rounded-lg bg-roxinho w-40 h-20 mt-10 px-2 font-sans text-center text-white text-xl font-bold hover:text-yellow-400"
                onClick={aoSalvarTime}>
                cancelar
              </button>
            </div>

          </form>
        </div>
      }
    </section>
  )
}
