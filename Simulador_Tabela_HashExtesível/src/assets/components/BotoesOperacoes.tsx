
import { inserir, buscar, remover } from '../script/script';
import type { DesenharHashExtensivel } from '../tabelahash/DesenharHashExtensível';
import type { HashExtensivel } from '../tabelahash/HashExtensivel';
import type { Registro } from '../tabelahash/Registro';

interface PropsOperacoes{
    item: number | string
    setTabelaHash: React.Dispatch<React.SetStateAction<HashExtensivel<Registro>>>;
    tabelaHash: HashExtensivel<Registro>
    update: React.Dispatch<React.SetStateAction<boolean>>;
    desenho: DesenharHashExtensivel
    referenciaCanvas: React.RefObject<HTMLCanvasElement | null>
    setStatus : React.Dispatch<React.SetStateAction<[string, string]>>;
}

function BotoesOperacoes(props: PropsOperacoes) {
    return (
        <div className="flex place-content-evenly">
            <button onClick={() => {
                if(props.item !== ''){
                    if(inserir(props.setTabelaHash, props.tabelaHash, props.item)){
                        props.setStatus(["[SUCESS]: Valor inserido com sucesso!", "green"]);
                        props.update((u:boolean)=> !u);
                    } else {
                        props.setStatus(["[ERRO]: Valor já existe!", "red"])
                    }
                }else{
                    props.setStatus(["[ERRO]: Valor inválido!", "red"])
                }
            }} className="px-4 py-2 rounded hover:bg-[var(--cor-intermediaria)]">Inserir</button>
            <button onClick={() => {
                if(props.item !== ''){
                    if(buscar(props.tabelaHash, props.item, props.desenho, props.referenciaCanvas)){
                        props.setStatus(["[SUCESS]: Valor encontrado!", "green"]);
                    }else {
                        props.setStatus(["[ERRO]: Valor não encontrado!", "red"])
                    }
                } else {
                    props.setStatus(["[ERRO]: Valor inválido!", "red"]);
                }
            }} className="px-4 py-2 rounded hover:bg-[var(--cor-intermediaria)]">Buscar</button>
            <button onClick={() => {
                if(props.item !== ''){
                    if(remover(props.setTabelaHash, props.tabelaHash, props.item)){
                        props.setStatus(["[SUCESS]: Valor removido!", "green"])
                        props.update((u:boolean)=> !u);
                    } else {
                        props.setStatus(["[ERRO]: Valor inexistente!", "red"])
                    }
                }else{
                    props.setStatus(["[ERRO]: Valor inválido!", "red"])
                }
            }} className="px-4 py-2 rounded hover:bg-[var(--cor-intermediaria)]">Remover</button>
        </div>
    );
}

export default BotoesOperacoes;
  