import { useEffect, useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { IColaborador } from './interfaces/IColaborador';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape.tsx';
import { v4 as uuidv4 } from 'uuid';

interface ITeste {
  id: string,
  nomeArea: string,
  corPrimaria: string,
}

function App() {

  const dadosTime =[
  {
    id: uuidv4(),
    nomeArea: 'Back-End',
    corPrimaria: '#57C278',
  },
  {
    id: uuidv4(),
    nomeArea: 'Front-End',
    corPrimaria: '#E06B69',
  },
  {
    id: uuidv4(),
    nomeArea: 'Data-Science',
    corPrimaria: '#A6D157',
  },
  {
    id: uuidv4(),
    nomeArea: 'Tech-Leader',
    corPrimaria: '#575757',
  },
  {
    id: uuidv4(),
    nomeArea: 'Ux e Design',
    corPrimaria: '#DB6EBF',
  },
  {
    id: uuidv4(),
    nomeArea: 'Mobile',
    corPrimaria: '#82CFFA',
  },
  {
    id: uuidv4(),
    nomeArea: 'Devops',
    corPrimaria: '#FFBA05',
  }
]

  const [times, setTimes] = useState<ITeste[]>(() => {
    const data = localStorage.getItem('cores');
    return data ? JSON.parse(data) : dadosTime;
  })


  useEffect(() => {
    localStorage.setItem("cores", JSON.stringify(times))
  }, [times]);

  // 2 formas de fazer o LocalStorage
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
    atualizar(colaboradores.filter((obj) => obj.id !== colaborador.id));
  };

  const atualizarCor = (cor: any) => {
    setTimes(cor)
    localStorage.setItem("cores", JSON.stringify(times))
   }

  const mudarCor = (cor: string, nome: string) => {
    atualizarCor(times.map((time) => {
      if (time.nomeArea === nome) {
        time.corPrimaria = cor;
      }
      return time;
    }));
  }


  return (
    <div>
      <Banner />
      <Formulario itens={dadosTime.map(e => e.nomeArea)} aoColaborador={colaborador => novoColaborador(colaborador)}/>
      {times.map(a => <Time
        mudarCor={mudarCor}
        excluir={excluir}
        key={a.id}
        area={a.nomeArea}
        corPrimaria={a.corPrimaria}
        colaborador={colaboradores.filter(colaborador => colaborador.time === a.nomeArea)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;

// text' | 'date' | 'password' | 'email' | 'number'
