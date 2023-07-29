import React, { ReactElement } from 'react'

interface BotaoProps {
  children: ReactElement | string

}


export default function Botao({ children }: BotaoProps) {
  return (
    <div>
      <button
        className="rounded-lg bg-roxinho w-40 h-20 mt-10 px-2 font-sans text-center text-white text-xl font-bold hover:text-yellow-400"> {children} </button>
    </div>
  )
}

