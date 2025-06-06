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
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const [tipoEnt, settipoEnt] = useState('number')
  const [item, setItem] = useState<string | number>('')
  const [tamanho, setTamanho] = useState<number>(4)
  const [update, setUpdate] = useState(true)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  let arrayteste: ElementoNumber[] = [];
  arrayteste.push(new ElementoNumber(1));
  arrayteste.push(new ElementoNumber(2));
  arrayteste.push(new ElementoNumber(3));
  arrayteste.push(new ElementoNumber(4));
  arrayteste.push(new ElementoNumber(5));
  arrayteste.push(new ElementoNumber(6));
  arrayteste.push(new ElementoNumber(7));
  arrayteste.push(new ElementoNumber(8));
  arrayteste.push(new ElementoNumber(9));
  //arrayteste.push(new ElementoNumber(10));
  console.log("Re-redenrizando o componente App");
  const [hashTable, sethashTable] = useState(() => new HashExtensivel<ElementoNumber>(4, canvasRef, arrayteste));

  useEffect(() => {
    console.log("useEffect chamado");
    if (canvasRef.current) {
      hashTable.desenharHashTable(50, 50, canvasRef);
    }
  }, [canvasRef, hashTable, update]);

  return (
    <>
      <h1 className="text-3xl font-bold w-full max-w-full text-center">Simulador de Tabela Hash Extensível</h1>
  
  <div className="flex flex-col items-center bg-[var(--cor-escura)] p-6 rounded-b-lg shadow-lg w-full max-w-full">
    <div className='flex flex-row items-center w-full max-w-full'>
      <CampoTamanho set={setTamanho} tamanho={tamanho} tabelahash={sethashTable} referenciaCanvas={canvasRef} update={setUpdate}/>
      <TipoEntrada set={settipoEnt} content={tipoEnt} sethashTable={sethashTable} tamanho={tamanho} referenciaCanvas={canvasRef} update={setUpdate}/>
    </div>
    <CampoValor tipo={tipoEnt} set={setItem} item={item}/>
    <BotoesOperacoes tipoEnt={tipoEnt}item={item} setHash={sethashTable} tabela={hashTable} referenciaCanvas={canvasRef} update={setUpdate}/>
    <div id="output" className="w-full mt-4 p-2 rounded text-sm">
      <canvas ref={canvasRef} className="border-4 border-black bg-white" id="canvasHashTable">

      </canvas>
    </div>

  </div>

    </>
  )
}

export default App
