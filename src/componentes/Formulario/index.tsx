import React, { useState } from 'react'
import { IColaborador } from '../../interfaces/IColaborador'
import Botao from '../Botao'
import Campotexto from '../CampoTexto'
import ListaCargos from '../ListaCargos'


export interface FormularioProps {
  aoColaborador: (colaborador: IColaborador) => void,
  itens: string[],
}


export default function Formulario({aoColaborador, itens}: FormularioProps) {

  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('Back-End');

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
      })
      setNome('')
      setCargo('')
      setImagem('')
      setTime('Back-End')
  }

    return (
      <section className="flex justify-center my-20">
        <form
          onSubmit={aoSalvar}
          className="max-w-[80%] bg-fundo-claro rounded-3xl py-9 px-16 shadow-sombra">
          <h2 className="font-serif text-neutral-800 text-[32px] font-normal">Preencha os dados para criar o card do colaborador</h2>
          <Campotexto
            obrigatorio={true}
            label='Nome'
            placeholder='Digite seu nome'
            valor={nome}
            teste={handleChange(setNome)}
          />
          <Campotexto
            label='Cargo'
            obrigatorio={true}
            placeholder='Digite seu cargo'
            valor={cargo}
            teste={handleChange(setCargo)}
          />
          <Campotexto
            obrigatorio={false}
            label='Perfil do github'
            placeholder='elzasoares'
            valor={imagem}
            teste={handleChange(setImagem)}
          />
          <ListaCargos
            obrigatorio={true}
            label='Time'
            itens={itens}
            valor={time}
            teste={handleChange(setTime)}
          />
          <Botao>
            Criar card
          </Botao>
        </form>
      </section>
    )
}
