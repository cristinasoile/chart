// em algum componente filho
import { useMeuContexto } from './contexts/MeuContexto';

function MeuComponente() {
  const [estado, dispatch] = useMeuContexto();

  // agora você pode usar estado e dispatch
}
