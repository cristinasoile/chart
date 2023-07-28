// src/App.tsx
import { MeuContextoProvedor } from './contexts/MeuContexto';

function App() {
  return (
    <MeuContextoProvedor>
      {/* outros componentes vão aqui */}
    </MeuContextoProvedor>
  );
}

export default App;
