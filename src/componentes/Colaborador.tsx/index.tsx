import { IColaborador } from "../../interfaces/IColaborador"
import { AiFillCloseCircle } from "react-icons/ai";
import { Tooltip } from 'react-tooltip'

interface ColaboradorProps extends IColaborador {
  excluir: (colaborador: IColaborador) => void;
}

function Colaborador({ nome, cargo, imagem, corDeFundo, excluir }: ColaboradorProps) {
  const handleExcluir = () => {
    // Chamamos diretamente a função 'excluir' passando este colaborador como argumento
    excluir({ nome, cargo, imagem, corDeFundo })
  };
  return (
    <div className='w-[280px]'>
      <div className='bg-backGround border rounded-t-xl h-[100px]' style={{ backgroundColor: corDeFundo }}>
        <div className='flex justify-end p-1'>

          <a data-tooltip-id="my-tooltip" data-tooltip-content="Excluir">
            <button onClick={handleExcluir}> {<AiFillCloseCircle size={30} className='text-roxinho' />} </button>
          </a>
          <Tooltip style={{ padding: "8px", borderRadius:'4px'  }} id="my-tooltip" />
        </div>
        <img className='w-[150px] border rounded-metade relative bottom-[25%] inline' src={`https://github.com/${imagem}.png`} alt={nome}></img>
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