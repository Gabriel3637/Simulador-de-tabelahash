import type { ElementoChar, ElementoNumber } from "../tabelahash/Elementos";
import { HashExtensivel } from "../tabelahash/HashExtensivel";
import type { Registro } from "../tabelahash/Registro";

interface PropsTamanho{
    tamanho: number;
    setTamanho: React.Dispatch<React.SetStateAction<number>>;
    tabelaHash: HashExtensivel<Registro>;
    setTabelaHash: React.Dispatch<React.SetStateAction<HashExtensivel<Registro>>>;
    update: React.Dispatch<React.SetStateAction<boolean>>;
    tipo: string;
    setStatus: React.Dispatch<React.SetStateAction<[string, string]>>
}

function CampoTamanho(props: PropsTamanho){
    return(
        <div className="flex flex-row items-center p-1 rounded-b-lg w-full max-w-full h-full">
        <label htmlFor="keyInput" className="text-white bg-[var(--cor-muito-escura)] p-2 rounded-l-md h-full">
            Tamanho do Bucket:
        </label>
        <input
        onChange={(e) => {
            props.setTamanho(Number(e.target.value)); 
            if(Number(e.target.value) > 0 && (/^-?\d+$/.test(e.target.value))){ 
                props.tabelaHash.modificarCapacidade(Number(e.target.value))
                props.setTabelaHash(props.tabelaHash);
    
                props.update((u:boolean)=> !u)
            }else{
                props.setStatus(["[ERRO]: Tamanho inválido!", "red"])
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