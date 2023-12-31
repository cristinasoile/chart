import { IColaborador } from "../../interfaces/IColaborador"
import { Tooltip } from 'react-tooltip'
import ModalDelete from "../Modals/ModalDelete";
import ModalEdit from "../Modals/ModalEdit";

interface ColaboradorProps extends IColaborador {
  excluir: (colaborador: IColaborador) => void;
}

function Colaborador({ id, nome, cargo, imagem, corDeFundo, excluir }: ColaboradorProps) {

  return (
    <div className='w-[280px]'>
      <div className='border-0 rounded-t-xl h-[100px] ' style={{ backgroundColor: corDeFundo}}>
        <div className='flex justify-between p-1'>
        <a data-tooltip-id="my-tooltip" data-tooltip-content="Editar">
            <ModalEdit id={id} nome={nome} cargo={cargo} />
          </a>
          <Tooltip style={{ padding: "8px", borderRadius:'4px'  }} id="my-tooltip" />
          <a data-tooltip-id="my-tooltip" data-tooltip-content="Excluir">
            <ModalDelete teste={excluir} nome={nome} cargo={cargo} imagem={imagem} id={id} />
          </a>
          <Tooltip style={{ padding: "8px", borderRadius:'4px'  }} id="my-tooltip" />
        </div>


        <a href={`https://github.com/${imagem}`} target='_blank'>
        <img className='w-[150px] border-0 rounded-metade relative bottom-[25%] inline' src={`https://github.com/${imagem}.png`} alt={nome}></img>
        </a>
      </div>
      <div className='bg-white shadow-sombra border rounded-b-xl pt-20 pb-10'>
        <h5 className='text-roxo text-lg font-bold mt-4'>{nome}</h5>
        <h4 className='text-texto text-lg font-semibold px-4'>{cargo}</h4>
      </div>
    </div>
  )
}

export default Colaborador
// https://github.com/cristinasoile.png
