import React, { useState } from 'react'
import { FaEdit } from 'react-icons/fa';


function ModalEdit() {
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
            <h2 className="font-sans">
              Modal Para atualizar
            </h2>
        <div className="flex justify-evenly my-6">
        <button
          onClick={() => setOpen(false)}
          className="bg-roxinho
           hover:bg-yellow-400
           text-white font-bold py-2
           px-4 rounded"
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
