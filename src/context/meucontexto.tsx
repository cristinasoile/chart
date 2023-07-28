// src/contexts/MeuContexto.tsx
import { createContext, useContext, useReducer } from 'react';

interface Estado {
  // Defina a forma do seu estado aqui
}

const estadoInicial: Estado = {
  // Inicialize seu estado aqui
};

interface Acao {
  type: string;
  payload?: any;
}

function redutor(estado: Estado, acao: Acao): Estado {
  // Implemente a lógica do redutor aqui
}

const MeuContexto = createContext({} as [Estado, React.Dispatch<Acao>]);

function MeuContextoProvedor({ children }: { children: React.ReactNode }) {
  const [estado, dispatch] = useReducer(redutor, estadoInicial);

  return (
    <MeuContexto.Provider value={[estado, dispatch]}>
      {children}
    </MeuContexto.Provider>
  );
}

function useMeuContexto() {
  const context = useContext(MeuContexto);
  if (context === undefined) {
    throw new Error('useMeuContexto deve ser usado dentro de MeuContextoProvedor');
  }
  return context;
}

export { MeuContextoProvedor, useMeuContexto };
