import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { IColaborador } from './interfaces/IColaborador';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape.tsx';


function App() {

  const times = [
    {
      nome: 'Back-End',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Front-End',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Data-Science',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Tech-Leader',
      corPrimaria: '#575757',
      corSecundaria: '#cecccc'
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Devops',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    }
  ]

  // const colaboradoresFromLocalStorage = localStorage.getItem("colaboradores");
  // const initialColaboradores: IColaborador[] = colaboradoresFromLocalStorage
  // ? JSON.parse(colaboradoresFromLocalStorage)
  // : [];

  // const [colaboradores, setColaboradores] = useState<IColaborador[]>(initialColaboradores)

  const [colaboradores, setColaboradores] = useState<IColaborador[]>(() => {
    const initialColaboradores = localStorage.getItem("colaboradores")
    return initialColaboradores ? JSON.parse(initialColaboradores) : []
  })


  const atualizar = (novos: React.SetStateAction<IColaborador[]>) => {
    setColaboradores(novos)
    localStorage.setItem("colaboradores", JSON.stringify(novos))
  }

  const novoColaborador = (colaborador: IColaborador) => {
    atualizar([...colaboradores, colaborador])

  }

  const excluir = (colaborador: IColaborador) => {
    atualizar(colaboradores.filter((obj) => obj.nome !== colaborador.nome));
  };

  return (
    <div>
      <Banner />
      <Formulario itens={times.map(e => e.nome)} aoColaborador={colaborador => novoColaborador(colaborador)}/>
      {times.map(a => <Time
        excluir={excluir}
        key={a.nome}
        nome={a.nome}
        corPrimaria={a.corPrimaria}
        corSecundaria={a.corSecundaria}
        colaborador={colaboradores.filter(colaborador => colaborador.time === a.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;

// text' | 'date' | 'password' | 'email' | 'number'
