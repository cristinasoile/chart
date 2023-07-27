import React from "react"

interface CampoTextoprops {
  teste: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => void,
  placeholder: string,
  label: string,
  obrigatorio: boolean
  valor: string,
}


export default function Campotexto({ placeholder, label, obrigatorio,valor, teste }: CampoTextoprops) {


  return (
    <div className="my-6">
      <label className="tiny:text-lg flex mb-2 text-texto font-sans sm:text-lg font-semibold"> {label}</label>
      <input onChange={teste} className="tiny:text-xs sm:text-base font-sans font-normal bg-white border-0 p-6 shadow-sombra rounded w-full box-border" placeholder={placeholder}
        required={obrigatorio}
        value={valor}

      />
    </div>
  )
}

