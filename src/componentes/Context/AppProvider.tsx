import { ReactNode, useEffect, useState, createContext } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { IColaborador } from '../../interfaces/IColaborador';


export interface IProvider extends IAppContext {
  children: ReactNode | ReactNode[];

}

export interface IAppContext {
  times: any;
  colaboradores: any;
  atualizar: any;
  novoColaborador: any;
  excluir: any;
  atualizarCor: any;
  mudarCor: any;
  cadastrarTime: any;
}

export interface ITeste {
  id: string,
  nomeArea: string,
  corPrimaria: string,
}

const dadosTime = [
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

// const [times, setTimes] = useState<ITeste[]>(() => {
//   const data = localStorage.getItem('cores');
//   return data ? JSON.parse(data) : dadosTime;
// })


// useEffect(() => {
//   localStorage.setItem("cores", JSON.stringify(times))
// }, [times]);

// const [colaboradores, setColaboradores] = useState<IColaborador[]>(() => {
//   const initialColaboradores = localStorage.getItem("colaboradores")
//   return initialColaboradores ? JSON.parse(initialColaboradores) : []
// })


// const atualizar = (novos: React.SetStateAction<IColaborador[]>) => {
//   setColaboradores(novos)
//   localStorage.setItem("colaboradores", JSON.stringify(novos))
// }


// const novoColaborador = (colaborador: IColaborador) => {
//   atualizar([...colaboradores, colaborador])

// }

// const excluir = (colaborador: IColaborador) => {
//   atualizar(colaboradores.filter((obj) => obj.id !== colaborador.id));
// };

// const atualizarCor = (cor: any) => {
//   setTimes(cor)
//   localStorage.setItem("cores", JSON.stringify(times))
// }

// const mudarCor = (cor: string, nome: string) => {
//   atualizarCor(times.map((time) => {
//     if (time.nomeArea === nome) {
//       time.corPrimaria = cor;
//     }
//     return time;
//   }));
// }

// const cadastrarTime = ({nomeArea, corPrimaria}: ITeste) => {
//   setTimes([...times, { nomeArea, corPrimaria, id: uuidv4()}])
// }



// const AppContext = createContext({} as IAppContext);
const AppContext = createContext<{
  times: ITeste[];
    colaboradores: IColaborador[];
  atualizar: (novos: React.SetStateAction<IColaborador[]>) => void;
  novoColaborador: (colaborador: IColaborador) => void;
  excluir: (colaborador: IColaborador) => void;
  atualizarCor: (cor: any) => void;
  setTimes: React.Dispatch<React.SetStateAction<ITeste[]>>;
} > ({
  times: dadosTime,
  setTimes: () => { },
  colaboradores: [],
  atualizar: () => { },
  novoColaborador: () => { },
  excluir: () => { },
  atualizarCor: () => { },
})


function AppProvider({children}: IProvider) {

  const [times, setTimes] = useState<ITeste[]>(() => {
    const data = localStorage.getItem('cores');
    return data ? JSON.parse(data) : dadosTime;
  })

  useEffect(() => {
    localStorage.setItem("cores", JSON.stringify(times))
  }, [times]);

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

  const cadastrarTime = ({nomeArea, corPrimaria}: ITeste) => {
    setTimes([...times, { nomeArea, corPrimaria, id: uuidv4()}])
  }


  // const contexto = useMemo(() => ({
  // }), []);

  const contexto: IAppContext = {
    times,
    colaboradores,
    atualizar,
    novoColaborador,
    excluir,
    atualizarCor,
    mudarCor,
    cadastrarTime,
  };

return (
  <AppContext.Provider value={{times, colaboradores,
    atualizar,
    novoColaborador,
    excluir,
    atualizarCor,
    mudarCor,
    cadastrarTime,}}>
    {children}
  </AppContext.Provider>
);
}

export {AppProvider, AppContext}
