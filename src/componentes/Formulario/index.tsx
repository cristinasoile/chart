import React, { useState } from 'react'
import { IColaborador } from '../../interfaces/IColaborador'
import Botao from '../Botao'
import Campotexto from '../CampoTexto'
import ListaCargos from '../ListaCargos'
import { v4 as uuidv4 } from 'uuid';
import { ICadastrarTimes } from '../../interfaces/ICadastrarTimes'
import { ITeste } from '../../App'


export interface FormularioProps {
  aoColaborador: (colaborador: IColaborador) => void,
  cadastrarTime: (time: ITeste) => void,
  itens: string[],
}


export default function Formulario({cadastrarTime, aoColaborador, itens}: FormularioProps) {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('Back-End');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');

  const handleChange = (setState: React.Dispatch<React.SetStateAction<string>>) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setState(e.target.value);
  }

    const aoSalvar = (e: React.FormEvent<HTMLFormElement>,
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

  const aoSalvarTime = (e: React.FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()
    cadastrarTime({
      id: uuidv4(),
      nomeArea: nomeTime,
      corPrimaria: corTime,
    })
    setNomeTime('')
    setCorTime('')

  }

    return (
      <section className="flex gap-4 justify-center my-20">
        <form
          onSubmit={aoSalvar}
          className="max-w-[80%] bg-fundo-claro rounded-3xl py-9 px-16 shadow-sombra">
          <h2 className="tiny:text-base font-serif text-neutral-800 text-[32px] font-normal sm:text-3xl">Preencha os dados para criar o card do colaborador</h2>
          <Campotexto
            obrigatorio
            label='Nome'
            placeholder='Digite seu nome'
            valor={nome}
            teste={handleChange(setNome)}
          />
          <Campotexto
            label='Cargo'
            obrigatorio
            placeholder='Digite seu cargo'
            valor={cargo}
            teste={handleChange(setCargo)}
          />
          <Campotexto
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
          <Botao>
            Criar card
          </Botao>
{/* form2 */}
        </form>
        <form
          onSubmit={aoSalvarTime}
          className="max-w-[80%] bg-fundo-claro rounded-3xl py-9 px-16 shadow-sombra">
          <h2 className="tiny:text-base font-serif text-neutral-800 text-[32px] font-normal sm:text-3xl">Preencha os dados para criar um novo time.</h2>
          <Campotexto
            obrigatorio
            label='Novo Time'
            placeholder='Digite nome do time'
            valor={nomeTime}
            teste={handleChange(setNomeTime)}
          />
          <Campotexto
            label='Cor'
            obrigatorio
            placeholder='Selecione a cor do time'
            valor={corTime}
            teste={handleChange(setCorTime)}
          />
          <Botao>
            Criar novo Time
          </Botao>
        </form>
      </section>
    )
}
