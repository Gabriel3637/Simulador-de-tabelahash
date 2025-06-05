import type { ElementoChar } from "../tabelahash/ElementoChar";
import type { ElementoNumber } from "../tabelahash/ElementoNumber";
import { HashExtensivel } from "../tabelahash/HashExtensivel";

function CampoTamanho(props: any){
    return(
        <input
        onChange={(e) => {
            props.set(Number(e.target.value)); 
            if(Number(e.target.value) > 0){ 
                if(props.tipo === 'number'){
                    props.tabelahash(new HashExtensivel<ElementoNumber>(props.tamanho))
                }else { 
                    props.tabelahash(new HashExtensivel<ElementoChar>(props.tamanho));
                }
            } else {
                props.set(1);
            }
        }}
        value={props.tamanho}
        id="keyInput"
        type="number"
        placeholder="Digite uma chave inteira"
        className="w-full p-2 mb-4 rounded border-2 text-[var(--cor-escura)]"
        min='1'
      />
    )
}

export default CampoTamanho;