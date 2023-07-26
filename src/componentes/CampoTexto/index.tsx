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
      <label className="flex mb-2 text-texto font-sans text-2xl font-semibold"> {label}</label>
      <input onChange={teste} className="font-sans font-normal bg-white border-0 p-6 shadow-sombra rounded w-full box-border" placeholder={placeholder}
        required={obrigatorio}
        value={valor}

      />
    </div>
  )
}

