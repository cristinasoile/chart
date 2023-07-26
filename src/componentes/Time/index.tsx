import { IColaborador } from '../../interfaces/IColaborador';
import { ITime } from '../../interfaces/ITimes'
import Colaborador from '../Colaborador.tsx'

interface ITime2 extends ITime {
  excluir: (colaborador: IColaborador) => void;
}

export default function Time({nome, corPrimaria, corSecundaria, colaborador, excluir}: ITime2 ) {

  const estiloSection = { backgroundColor: corSecundaria }
  const estiloH3 = { borderColor: corPrimaria }

  return (
    // as duas formas de condições podem ser válidas
    // (colaborador.length > 0) &&
    (colaborador.length > 0) ?
    <>
        <section className='text-center p-8 bg-verdinho ' style={estiloSection}>
      <h3 className='inline-block font-serif text-neutral-800 text-[32px] font-normal border-b-4 mb-10' style={estiloH3}>{nome}</h3>
        <div className='flex flex-wrap justify-evenly mt-2 gap-4'>
            {colaborador.map(p => <Colaborador
          excluir={excluir}
          corDeFundo={corPrimaria}
          key={p.nome}
          nome={p.nome}
          cargo={p.cargo }
          imagem={p.imagem }
          time={p.time}
          data={p.data} />)}
        </div>
    </section>
      </>
      : <div></div>
  )


}

