import './App.css'

import { useState } from 'react'
import { useRef } from 'react'
import { useEffect } from 'react'

import type { Registro } from './assets/tabelahash/Registro'

import { HashExtensivel } from './assets/tabelahash/HashExtensivel'
import { ElementoNumber } from "./assets/tabelahash/Elementos";
import { DesenharHashExtensivel } from './assets/tabelahash/DesenharHashExtensível'

import TipoEntrada from './assets/components/TipoEntrada'
import CampoValor from './assets/components/CampoValor'
import CampoTamanho from './assets/components/CampoTamanho'
import BotoesOperacoes from './assets/components/BotoesOperacoes'

function App() {
  const [tipoEnt, settipoEnt] = useState('number')
  const [item, setItem] = useState<string | number>('')
  const [tamanho, setTamanho] = useState<number>(4)
  const [update, setUpdate] = useState(true)
  const [status, setStatus] = useState<[string, string]>(["", "green"])
  const canvasRef = useRef<HTMLCanvasElement>(null)
  //console.log("Re-redenrizando o componente App");
  const [hashTable, sethashTable] = useState<HashExtensivel<Registro>>(() => new HashExtensivel<ElementoNumber>(4));
  const [desenhar, setDesenhar] = useState(() => new DesenharHashExtensivel(hashTable, canvasRef));

  useEffect(() => {
    //console.log("useEffect chamado");
    if (canvasRef.current) {
      desenhar.atualizarHashExtensível(hashTable);
      desenhar.atualizarCanvas(canvasRef);
      desenhar.desenharHashTable(50, 50);
      
      setDesenhar(desenhar)
    }
  }, [canvasRef, hashTable, update]);

  return (
    <>
      <h1 className="text-3xl font-bold w-full max-w-full text-center">Simulador de Tabela Hash Extensível</h1>
      <div className={`text-center text-${status[1]}-500`}>
        {status[0]}
      </div>
  <div className="flex flex-col items-center bg-[var(--cor-escura)] p-1 rounded-b-lg shadow-lg w-full max-w-full">
    <div className='flex flex-row items-center w-full max-w-full'>
      <CampoTamanho setTamanho={setTamanho} tamanho={tamanho} setTabelaHash={sethashTable} update={setUpdate} tipo={tipoEnt} tabelaHash={hashTable} setStatus={setStatus}/>
      <TipoEntrada setTipoEnt={settipoEnt} tipoEnt={tipoEnt} setTabelaHash={sethashTable} tamanho={tamanho} update={setUpdate}/>
    </div>
    <div className='flex flex-row items-center w-full max-w-full'>

    <CampoValor tipoEnt={tipoEnt} setItem={setItem} item={item} setStatus={setStatus}/>
    <BotoesOperacoes item={item} setTabelaHash={sethashTable} tabelaHash={hashTable} update={setUpdate} desenho={desenhar} referenciaCanvas={canvasRef} setStatus={setStatus}/>
    </div>
    <div id="output" className="w-full mt-4 p-2 rounded text-sm">
      <canvas ref={canvasRef} className="border-4 border-black bg-white w-full" id="canvasHashTable">

      </canvas>
    </div>

  </div>

    </>
  )
}

export default App
