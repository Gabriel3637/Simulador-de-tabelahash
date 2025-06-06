import useState from 'react';
import { inserirChar, buscarChar, removerChar } from '../script/script';
import { inserirNumber, buscarNumber, removerNumber } from '../script/script';
import { p } from 'milliparsec';

function BotoesOperacoes(props: any) {
    if(props.tipoEnt == 'number') {
        return (
            <div className="flex space-x-4">
                <button onClick={(e) => {
                    if(props.item !== ''){
                        inserirNumber(props.setHash, props.tabela, props.item, e, props.referenciaCanvas);
                        props.update((u:boolean)=> !u);
                    }
                }} className="px-4 py-2 rounded hover:bg-[var(--cor-intermediaria)]">Inserir</button>
                <button onClick={(e) => buscarNumber(props.tabela, props.item, e, props.referenciaCanvas)} className="px-4 py-2 rounded hover:bg-[var(--cor-intermediaria)]">Buscar</button>
                <button onClick={(e) => removerNumber(props.setHash, props.tabela, props.item, e, props.referenciaCanvas)} className="px-4 py-2 rounded hover:bg-[var(--cor-intermediaria)]">Remover</button>
            </div>
        );
    } else {
        return (
            <div className="flex space-x-4">
                <button onClick={(e) => {
                    if(props.item !== ''){
                        inserirChar(props.setHash, props.tabela, props.item, e, props.referenciaCanvas);
                        props.update((u:boolean)=> !u);
                    }
                }} className="px-4 py-2 rounded hover:bg-[var(--cor-intermediaria)]">Inserir</button>
                <button onClick={(e) => buscarChar(props.tabela, props.item, e)} className="px-4 py-2 rounded hover:bg-[var(--cor-intermediaria)]">Buscar</button>
                <button onClick={(e) => removerChar(props.setHash, props.tabela, props.item, e)} className="px-4 py-2 rounded hover:bg-[var(--cor-intermediaria)]">Remover</button>
            </div>
        );
    }
}

export default BotoesOperacoes;
  