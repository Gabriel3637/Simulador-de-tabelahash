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
function inserirNumber(atualizador: React.Dispatch<React.SetStateAction<HashExtensivel<ElementoNumber>>>, tabela: HashExtensivel<ElementoNumber>, valor: number, event: React.MouseEvent<HTMLButtonElement>): boolean {
  let resp: boolean = true;
  let key: number = valor;
  let elemento: ElementoNumber = new ElementoNumber(key);
  tabela.adicionarItem(elemento)
  atualizador(tabela);
  tabela.print();
  
  return resp;
}

function inserirChar(atualizador: React.Dispatch<React.SetStateAction<HashExtensivel<ElementoChar>>>, tabela: HashExtensivel<ElementoChar>, valor: string, event: React.MouseEvent<HTMLButtonElement>): boolean {
  let key: string;
  let resp: boolean = false;
  if (valor.length === 1 && /^[a-zA-Z]$/.test(valor)) {
    resp = true;
    key = valor.charAt(0); // Selecionar o primeiro caractere
    let elemento: ElementoChar = new ElementoChar(key);
    tabela.adicionarItem(elemento);
    atualizador(tabela);
    tabela.print();
  }
  return resp;
}

// Função para buscar chave
function buscarNumber(tabela: HashExtensivel<ElementoNumber>, valor: number, event: React.MouseEvent<HTMLButtonElement>): boolean {
  let resp: boolean = false;
  let key: number = valor;
  return resp;
}

function buscarChar(tabela: HashExtensivel<ElementoChar>, valor: string, event: React.MouseEvent<HTMLButtonElement>): boolean {
  let key: string;
  let resp: boolean = false;
  if (valor.length === 1 && /^[a-zA-Z]$/.test(valor)) {
    resp = true;
    key = valor.charAt(0); //Selecionar o primeiro caractere
  }
  return resp;
}

// Função para remover chave
function removerNumber(tabela: HashExtensivel<ElementoNumber>, valor: number, event: React.MouseEvent<HTMLButtonElement>): boolean {
  let resp: boolean = false;
  let key: number = valor;
  return resp;
}

function removerChar(tabela: HashExtensivel<ElementoChar>, valor: string, event: React.MouseEvent<HTMLButtonElement>): boolean {
  let key: string;
  let resp: boolean = false;
  if (valor.length === 1 && /^[a-zA-Z]$/.test(valor)) {
    resp = true;
    key = valor.charAt(0); //Selecionar o primeiro caractere
  }
  return resp;
}

export { inserirChar, inserirNumber, buscarChar, buscarNumber, removerChar, removerNumber };