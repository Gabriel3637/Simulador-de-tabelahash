import { HashExtensivel } from "../tabelahash/HashExtensivel";
import { ElementoChar } from "../tabelahash/ElementoChar";
import { ElementoNumber } from "../tabelahash/ElementoNumber";

// Ajustar tipo de entrada com base no rádio
/*const tipoInteiroInput = document.getElementById('tipoInteiro') as HTMLInputElement;
const tipoCharInput = document.getElementById('tipoChar') as HTMLInputElement;
const keyInput = document.getElementById('keyInput') as HTMLInputElement;
const output = document.getElementById('output') as HTMLElement;

tipoInteiroInput.addEventListener('change', () => {
  keyInput.type = 'number';
  keyInput.placeholder = 'Digite uma chave inteira';
  keyInput.value = '';
});

tipoCharInput.addEventListener('change', () => {
  keyInput.type = 'text';
  keyInput.maxLength = 1;
  keyInput.placeholder = 'Digite um caractere';
  keyInput.value = '';
});*/

// Função para inserir chave
function inserirNumber(atualizador: React.Dispatch<React.SetStateAction<HashExtensivel<ElementoNumber>>>, tabela: HashExtensivel<ElementoNumber>, valor: number, event: React.MouseEvent<HTMLButtonElement>, canvas: React.RefObject<HTMLCanvasElement | null>): boolean {
  let resp: boolean = true;
  let key: number = valor;
  let elemento: ElementoNumber = new ElementoNumber(key);
  tabela.adicionarItem(elemento)
  atualizador(tabela);
  tabela.desenharHashTable(50, 50, canvas);
  tabela.print();
  
  return resp;
}

function inserirChar(atualizador: React.Dispatch<React.SetStateAction<HashExtensivel<ElementoChar>>>, tabela: HashExtensivel<ElementoChar>, valor: string, event: React.MouseEvent<HTMLButtonElement>, canvas: React.RefObject<HTMLCanvasElement | null>): boolean {
  let key: string;
  let resp: boolean = false;
  if (valor.length === 1 && /^[a-zA-Z]$/.test(valor)) {
    resp = true;
    key = valor.charAt(0); // Selecionar o primeiro caractere
    let elemento: ElementoChar = new ElementoChar(key);
    tabela.adicionarItem(elemento);
    atualizador(tabela);
    tabela.desenharHashTable(50, 50, canvas);
    tabela.print();
  }
  return resp;
}

// Função para buscar chave
function buscarNumber(tabela: HashExtensivel<ElementoNumber>, valor: number, event: React.MouseEvent<HTMLButtonElement>, canvas: React.RefObject<HTMLCanvasElement | null>): boolean {
  let resp: boolean = false;
  let key: number = valor;
  let elementobusca: ElementoNumber = new ElementoNumber(key);
  let elemento: ElementoNumber | null = tabela.buscarItem(elementobusca, canvas);
  if(elemento !== null){
    console.log(`Encontrado: ${elemento.toString()}`)
    resp = true;
  }
  return resp;
}

function buscarChar(tabela: HashExtensivel<ElementoChar>, valor: string, event: React.MouseEvent<HTMLButtonElement>): boolean {
  let key: string;
  let resp: boolean = false;
  if (valor.length === 1 && /^[a-zA-Z]$/.test(valor)) {
    resp = true;
    key = valor.charAt(0); //Selecionar o primeiro caractere
    let elementobusca: ElementoChar = new ElementoChar(key);
    let elemento: ElementoChar | null = tabela.buscarItem(elementobusca);
    if(elemento !== null){
      console.log(`Encontrado: ${elemento.toString()}`)
      resp = true;
    }
  }
  return resp;
}

// Função para remover chave
function removerNumber(atualizador: React.Dispatch<React.SetStateAction<HashExtensivel<ElementoNumber>>>, tabela: HashExtensivel<ElementoNumber>, valor: number, event: React.MouseEvent<HTMLButtonElement>, canvas: React.RefObject<HTMLCanvasElement | null>): boolean {
  let resp: boolean = false;
  let key: number = valor;
  let elementoremover: ElementoNumber = new ElementoNumber(key);
  resp = tabela.removerItem(elementoremover);
  if(resp){
    atualizador(tabela);
    tabela.desenharHashTable(50, 50, canvas);
    tabela.print();
  }
  return resp;
}

function removerChar(atualizador: React.Dispatch<React.SetStateAction<HashExtensivel<ElementoChar>>>, tabela: HashExtensivel<ElementoChar>, valor: string, event: React.MouseEvent<HTMLButtonElement>, canvas: React.RefObject<HTMLCanvasElement | null>): boolean {
  let key: string;
  let resp: boolean = false;
  if (valor.length === 1 && /^[a-zA-Z]$/.test(valor)) {
    resp = true;
    key = valor.charAt(0); //Selecionar o primeiro caractere
    let elementoremover: ElementoChar = new ElementoChar(key);
    resp = tabela.removerItem(elementoremover);
    if(resp){
      atualizador(tabela);
      tabela.desenharHashTable(50, 50, canvas);
      tabela.print();
    }
  }
  return resp;
}

export { inserirChar, inserirNumber, buscarChar, buscarNumber, removerChar, removerNumber };