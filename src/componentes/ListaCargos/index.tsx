import React from "react"

interface ListaCargosProps {
  teste: (e: React.ChangeEvent<HTMLSelectElement> ) => void,
  itens: Array<string>,
  label: string
  obrigatorio: boolean
  valor: string,
}

export default function ListaCargos({ itens, label, obrigatorio, valor, teste }: ListaCargosProps) {


  return (
    <div>
      <label className="flex mb-2 text-texto font-sans text-2xl font-semibold" > {label}</label>
      <select onChange={teste} required={obrigatorio} value={valor} className="font-sans font-normal bg-white border-0 p-6 shadow-sombra rounded w-full box-border" >
        {itens.map((a, index) => <option key={index}>{a}</option>)}
      </select>
    </div>
  )


}

