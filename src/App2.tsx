import { useEffect, useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { IColaborador } from './interfaces/IColaborador';
import Time from './componentes/Time';
import Rodape from './componentes/Rodape.tsx';
import { v4 as uuidv4 } from 'uuid';


function App() {



  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Back-End',
      corPrimaria: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      corPrimaria: '#E06B69',
    },
    {
      id: uuidv4(),
      nome: 'Data-Science',
      corPrimaria: '#A6D157',
    },
    {
      id: uuidv4(),
      nome: 'Tech-Leader',
      corPrimaria: '#575757',
    },
    {
      id: uuidv4(),
      nome: 'Ux e Design',
      corPrimaria: '#DB6EBF',
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      corPrimaria: '#82CFFA',
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      corPrimaria: '#FFBA05',
    }
  ])


  useEffect(() => {
    const corStatus = localStorage.getItem("cores");
    if (corStatus) {
      setTimes(JSON.parse(corStatus))
    };
  },[])

  useEffect(() => {
    localStorage.setItem("cores", JSON.stringify(times))
  }, [times]);

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

  const atualizarCor = (cor: any) => {
    setTimes(cor)
    localStorage.setItem("cores", JSON.stringify(times))
   }

  const mudarCor = (cor: string, id: string) => {
    atualizarCor(times.map((time) => {
      if (time.nome === id) {
        time.corPrimaria = cor;
      }
      return time;
    }));
  }


  return (
    <div>
      <Banner />
      <Formulario itens={times.map(e => e.nome)} aoColaborador={colaborador => novoColaborador(colaborador)}/>
      {times.map(a => <Time
        mudarCor={mudarCor}
        excluir={excluir}
        key={a.nome}
        nome={a.nome}
        corPrimaria={a.corPrimaria}
        colaborador={colaboradores.filter(colaborador => colaborador.time === a.nome)}
      />)}
      <Rodape />
    </div>
  );
}

export default App;

// text' | 'date' | 'password' | 'email' | 'number'
