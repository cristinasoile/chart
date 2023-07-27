import { IColaborador } from '../../interfaces/IColaborador';
import { ITime } from '../../interfaces/ITimes'
import Colaborador from '../Colaborador.tsx'
import hexToRgba from 'hex-to-rgba';

interface ITime2 extends ITime {
  excluir: (colaborador: IColaborador) => void;
  mudarCor: (cor: string, nome: string) => void;
}

export default function Time({nome, corPrimaria, colaborador, excluir, mudarCor}: ITime2 ) {

  const estiloSection = { backgroundColor: hexToRgba(corPrimaria, '0.6') }

  const estiloH3 = { borderColor: corPrimaria }

  return (
    // as duas formas de condições podem ser válidas
    // (colaborador.length > 0) &&
    (colaborador.length > 0) ?
    <>
        <section className='text-center p-8 relative' style={estiloSection}>
          <input type='color' value={corPrimaria} className='absolute top-5 right-12' onChange={(e) => mudarCor(e.target.value, nome)} />
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

