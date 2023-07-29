import "./campoTexto.css"
import React from "react"

interface CampoTextoprops {
  alterarEstado?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
  placeholder: string,
  label: string,
  obrigatorio: boolean
  valor: string,
  valor2?: string,
  type: 'text' | 'date' | 'password' | 'email' | 'number' | 'color',
}


export default function Campotexto({ type, placeholder, label, obrigatorio, valor, alterarEstado }: CampoTextoprops) {


  return (
    <div className={`my-6 input-${type}`} >
      <label className="tiny:text-lg flex mb-2 text-texto font-sans sm:text-lg font-semibold"> {label}</label>
      <input onChange={alterarEstado} className="tiny:text-xs sm:text-base font-sans font-normal bg-white border-0 p-6 shadow-sombra rounded w-full box-border" placeholder={placeholder}
        required={obrigatorio}
        value={valor}
        type={type}
      />
    </div>
  )
}

