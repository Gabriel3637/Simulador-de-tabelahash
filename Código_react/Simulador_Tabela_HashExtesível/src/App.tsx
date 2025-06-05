import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './App.css'
import TipoEntrada from './assets/components/TipoEntrada'
import CampoValor from './assets/components/CampoValor'
import CampoTamanho from './assets/components/CampoTamanho'
import BotoesOperacoes from './assets/components/BotoesOperacoes'
import { HashExtensivel } from './assets/tabelahash/HashExtensivel'
import { ElementoChar } from './assets/tabelahash/ElementoChar'
import { ElementoNumber } from './assets/tabelahash/ElementoNumber'

function App() {
  const [tipoEnt, settipoEnt] = useState('number')
  const [hashTable, sethashTable] = useState(new HashExtensivel<ElementoNumber>(4))
  const [item, setItem] = useState<string | number>('')
  const [tamanho, setTamanho] = useState<number>(4)

  return (
    <>
      <h1 className="text-3xl font-bold mb-4">Simulador de Tabela Hash Extensível</h1>
  
  <div className="flex flex-col items-center bg-[var(--cor-escura)] p-6 rounded-lg shadow-lg w-full max-w-md">
    <CampoTamanho set={setTamanho} tamanho={tamanho} tabelahash={sethashTable}/>
    <TipoEntrada set={settipoEnt} content={tipoEnt} sethashTable={sethashTable} tamanho={tamanho}/>
    <CampoValor tipo={tipoEnt} set={setItem} item={item}/>
    <BotoesOperacoes tipoEnt={tipoEnt}item={item} setHash={sethashTable} tabela={hashTable}/>
    <div id="output" className="w-full mt-4 p-2 rounded text-sm"></div>
  </div>

    </>
  )
}

export default App
