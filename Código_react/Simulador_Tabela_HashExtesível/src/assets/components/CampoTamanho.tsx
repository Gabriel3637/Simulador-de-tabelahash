import type { ElementoChar } from "../tabelahash/ElementoChar";
import type { ElementoNumber } from "../tabelahash/ElementoNumber";
import { HashExtensivel } from "../tabelahash/HashExtensivel";

function CampoTamanho(props: any){
    return(
        <div className="flex flex-row items-center p-6 rounded-b-lg w-full max-w-full h-full">
        <label htmlFor="keyInput" className="text-white bg-[var(--cor-muito-escura)] p-2 rounded-l-md h-full">
            Tamanho do Bucket:
        </label>
        <input
        onChange={(e) => {
            console.log("Tamanho do bucket alterado para: ", e.target.value);
            props.set(Number(e.target.value)); 
            if(Number(e.target.value) > 0){ 
                if(props.tipo === 'number'){
                    props.tabelahash(new HashExtensivel<ElementoNumber>(props.tamanho, props.referenciaCanvas));
                }else { 
                    props.tabelahash(new HashExtensivel<ElementoChar>(props.tamanho, props.referenciaCanvas));
                }
                props.update((u:boolean)=> !u)
            } else {
                props.set(1);
            }
        }}
        value={props.tamanho}
        id="tamanhoInput"
        type="number"
        placeholder="Digite o tamanho do bucket"
        step={"1"}
        className="h-full w-full p-2 rounded-r-md border-2 border-[var(--cor-muito-escura)] text-[var(--cor-escura)]"
        min='1'
      />
      </div>
    )
}

export default CampoTamanho;