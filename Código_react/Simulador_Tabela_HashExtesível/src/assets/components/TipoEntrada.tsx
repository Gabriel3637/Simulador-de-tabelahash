import { useState } from 'react'
import { HashExtensivel } from '../tabelahash/HashExtensivel';
import type { ElementoNumber } from '../tabelahash/ElementoNumber';
import type { ElementoChar } from '../tabelahash/ElementoChar';
function TipoEntrada(props: any) {

  return (
    <div className="flex space-x-4 mb-4">
      <div className="flex items-center">
        <input
          type="radio"
          id="tipoInteiro"
          name="tipoEntrada"
          value="inteiro"
          checked={props.content === 'number'}
          onChange={() => {props.set('number'); props.sethashTable(new HashExtensivel<ElementoNumber>(props.tamanho))}}
          className="hidden"
        />
        <label htmlFor="tipoInteiro" className="px-4 py-2 rounded cursor-pointer">Inteiro</label>
      </div>
      <div className="flex items-center">
        <input
          type="radio"
          id="tipoChar"
          name="tipoEntrada"
          value="char"
          checked={props.content === 'text'}
          onChange={() => {props.set('text'); props.sethashTable(new HashExtensivel<ElementoChar>(props.tamanho))}}
          className="hidden"
        />
        <label htmlFor="tipoChar" className="px-4 py-2 rounded cursor-pointer">Char</label>
      </div>
    </div>
  );
}

export default TipoEntrada;