
import { HashExtensivel } from '../tabelahash/HashExtensivel';
import type { ElementoChar, ElementoNumber } from "../tabelahash/Elementos";
import type { Registro } from '../tabelahash/Registro';

interface PropsTipoEntrada{
  tipoEnt: string;
  setTipoEnt:  React.Dispatch<React.SetStateAction<string>>;
  setTabelaHash: React.Dispatch<React.SetStateAction<HashExtensivel<Registro>>>;
  update: React.Dispatch<React.SetStateAction<boolean>>;
  tamanho: number;
}

function TipoEntrada(props: PropsTipoEntrada) {
  return (
    <div className="flex space-x-4">
      <div className="flex items-center">
        <input
          type="radio"
          id="tipoInteiro"
          name="tipoEntrada"
          value="inteiro"
          checked={props.tipoEnt === 'number'}
            onChange={() => {props.setTipoEnt('number'); props.setTabelaHash(new HashExtensivel<ElementoNumber>(props.tamanho)); props.update((u:boolean)=> !u)}}
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
          checked={props.tipoEnt === 'text'}
          onChange={() => {props.setTipoEnt('text'); props.setTabelaHash(new HashExtensivel<ElementoChar>(props.tamanho));  props.update((u:boolean)=> !u)}}
          className="hidden"
        />
        <label htmlFor="tipoChar" className="px-4 py-2 rounded cursor-pointer">Char</label>
      </div>
    </div>
  );
}

export default TipoEntrada;