import React from 'react'

function Rodape() {
  return (
    <footer className="flex w-full bg-rodape bg-cover p-20 ">
      <div className=' flex w-full justify-around items-center'>
        <section className='w-28 ml-40 '>
            <img src="/imagens/minhas_imagens/logo_chartinho+B.png" alt="" />
      </section>
        <section className='flex'>
            <p className='text-white'>
                Desenvolvido por Cristina Soile.
            </p>
        </section>
      </div>

    </footer>
  )
}

export default Rodape
