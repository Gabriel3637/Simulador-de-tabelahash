import { HashExtensivel } from "../tabelahash/HashExtensivel";
import { ElementoChar, ElementoNumber } from "../tabelahash/Elementos";
import type { Registro } from "../tabelahash/Registro";
import type { DesenharHashExtensivel } from "../tabelahash/DesenharHashExtensível";

/*
Identidade: inserir()
Objetivo: Inserir uma string ou number na tabela hash
Parâmetros: 
- atualizador: useEffect para atualizar o desenho
- tabela: Referencia a tabelaHash
- valor: String ou number para ser inserido
Retorno: Boleano indicando se a inserção foi feita com sucesso
*/
function inserir(atualizador: React.Dispatch<React.SetStateAction<HashExtensivel<Registro>>>, tabela: HashExtensivel<Registro>, valor: number | string): boolean {
  let resp: boolean = false;

  if(typeof valor === 'string'){
    if (valor.length === 1 && /^[a-zA-Z]$/.test(valor)) {
      let keyString: string = valor;
      resp = tabela.adicionarItem(new ElementoChar(keyString));
    }
  } else if(typeof valor === 'number'){
    let keyNumber: number = valor;
    resp = tabela.adicionarItem(new ElementoNumber(keyNumber));
  }
  atualizador(tabela);
  
  return resp;
}

/*
Identidade: buscar()
Objetivo: Buscar uma string ou number na tabela hash
Parâmetros: 
- tabela: Referencia a tabelaHash
- valor: String ou number para ser inserido
- desenho: Instância da classe DesenharHashExtensivel para realizar o desenho
- canvasReF: Referencia para tag canvas do react
Retorno: Boleano indicando se a busca foi feita com sucesso
*/
function buscar(tabela: HashExtensivel<Registro>, valor: number | string, desenho: DesenharHashExtensivel, canvasRef: React.RefObject<HTMLCanvasElement | null>): boolean {
  let resp: boolean = false;
  
  if(typeof valor === 'string'){
    if (valor.length === 1 && /^[a-zA-Z]$/.test(valor)) {
      let keyString: string = valor;
      let elementoStringEncontrado: [number, number] = tabela.buscarItem(new ElementoChar(keyString));;
      if(elementoStringEncontrado[0] !== -1){
        //console.log(`Encontrado: ${tabela.getItem(elementoStringEncontrado[0], elementoStringEncontrado[1]).toString()}`)
        resp = true;
      }
      desenho.atualizarCanvas(canvasRef);
      desenho.desenharBusca(50, 50, elementoStringEncontrado[0], elementoStringEncontrado[1]);
    }
  } else if(typeof valor === 'number'){
    let keyNumber: number = valor;
    let elementoNumberEncontrado: [number, number] = tabela.buscarItem(new ElementoNumber(keyNumber));;
      if(elementoNumberEncontrado[1] !== -1){
        //console.log(`Encontrado: ${tabela.getItem(elementoNumberEncontrado[0], elementoNumberEncontrado[1]).toString()}`);
        resp = true;
      }
      desenho.atualizarCanvas(canvasRef);
      desenho.desenharBusca(50, 50, elementoNumberEncontrado[0], elementoNumberEncontrado[1]);
  }
  return resp;
}


/*
Identidade: remover()
Objetivo: Remover uma string ou number na tabela hash
Parâmetros: 
- atualizador: useEffect para atualizar o desenho
- tabela: Referencia a tabelaHash
- valor: String ou number para ser inserido
Retorno: Boleano indicando se a remoção foi feita com sucesso
*/
function remover(atualizador: React.Dispatch<React.SetStateAction<HashExtensivel<Registro>>>, tabela: HashExtensivel<Registro>, valor: number | string): boolean {
  let resp: boolean = false;

  if(typeof valor === 'string'){
    if (valor.length === 1 && /^[a-zA-Z]$/.test(valor)) {
      let keyString: string = valor;
      resp = tabela.removerItem(new ElementoChar(keyString));
    }
  } else if(typeof valor === 'number'){
    let keyNumber: number = valor;
    resp = tabela.removerItem(new ElementoNumber(keyNumber));
  }
  if(resp){
    atualizador(tabela);
  }
  return resp;
}

export { inserir, buscar, remover};