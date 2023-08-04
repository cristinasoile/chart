import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa';
import Campotexto from '../CampoTexto';
import Formulario from '../Formulario';


function ModalEdit({ id, nome, cargo, imagem, corDeFundo, excluir }) {

  const [open, setOpen] = useState(false)


  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="text-red-500 hover:text-red-700"
      >
        <FaEdit size={30} className='text-roxinho hover:text-yellow-400' />
      </button>
      {open &&
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white mx-4 w-full max-w-[600px] text-center p-6 gap-6 rounded-lg">
            <section className="flex flex-wrap gap-4 justify-center my-20">
              <form
                // onSubmit={aoSalvar}
                className="max-w-[80%] bg-fundo-claro rounded-3xl py-9 px-16 shadow-sombra">
                <h2 className="tiny:text-base font-serif text-neutral-800 text-[32px] font-normal sm:text-lg">
                  Preencha os dados para criar o card do colaborador</h2>

              </form>
            </section>
            <div className="flex justify-evenly my-6">
              <button
                onClick={() => setOpen(false)}
                className="bg-roxinho hover:bg-yellow-400 text-white font-bold py-2 px-4 rounded"
              >
                Atualizar
              </button>
            </div>
          </div>
        </div>

      }
    </>
  )
}

export default ModalEdit
