// Interface para itens da tabela hash
interface HashItem {
  key: number;
  displayKey: string | number;
}

// Configuração da tabela hash
let tableSize: number = 4; // Tamanho inicial da tabela
let hashTable: HashItem[][] = Array(tableSize).fill(null).map(() => []);
let highlightedBucket: number = -1; // Para destacar bucket na busca

// Função hash
function hashFunction(key: string | number, tipo: 'char' | 'inteiro'): number {
  if (tipo === 'char') {
    return (key as string).charCodeAt(0) % tableSize;
  }
  return (key as number) % tableSize;
}

// Ajustar tipo de entrada com base no rádio
const tipoInteiroInput = document.getElementById('tipoInteiro') as HTMLInputElement;
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
});

// Função para inserir chave
function inserir(): void {
  const tipo = (document.querySelector('input[name="tipoEntrada"]:checked') as HTMLInputElement)?.value as 'char' | 'inteiro';
  const keyInputValue: string = keyInput.value;
  let key: number;
  let displayKey: string | number;

  if (tipo === 'inteiro') {
    key = parseInt(keyInputValue);
    if (isNaN(key)) {
      output.innerText = 'Por favor, insira um número inteiro válido.';
      return;
    }
    displayKey = key;
  } else {
    if (keyInputValue.length !== 1) {
      output.innerText = 'Por favor, insira exatamente um caractere.';
      return;
    }
    key = keyInputValue.charCodeAt(0); // Converter char para código ASCII
    displayKey = keyInputValue;
  }

  const index: number = hashFunction(key, tipo);
  if (!hashTable[index].some(item => item.key === key)) {
    hashTable[index].push({ key, displayKey });
    output.innerText = `Chave ${displayKey} inserida no bucket ${index}.`;
  } else {
    output.innerText = `Chave ${displayKey} já existe no bucket ${index}.`;
  }
  keyInput.value = '';
  highlightedBucket = -1;
}

// Função para buscar chave
function buscar(): void {
  const tipo = (document.querySelector('input[name="tipoEntrada"]:checked') as HTMLInputElement)?.value as 'char' | 'inteiro';
  const keyInputValue: string = keyInput.value;
  let key: number;
  let displayKey: string | number;

  if (tipo === 'inteiro') {
    key = parseInt(keyInputValue);
    if (isNaN(key)) {
      output.innerText = 'Por favor, insira um número inteiro válido.';
      return;
    }
    displayKey = key;
  } else {
    if (keyInputValue.length !== 1) {
      output.innerText = 'Por favor, insira exatamente um caractere.';
      return;
    }
    key = keyInputValue.charCodeAt(0);
    displayKey = keyInputValue;
  }

  const index: number = hashFunction(key, tipo);
  highlightedBucket = index;
  if (hashTable[index].some(item => item.key === key)) {
    output.innerText = `Chave ${displayKey} encontrada no bucket ${index}.`;
  } else {
    output.innerText = `Chave ${displayKey} não encontrada.`;
  }
  keyInput.value = '';
}

// Função para remover chave
function remover(): void {
  const tipo = (document.querySelector('input[name="tipoEntrada"]:checked') as HTMLInputElement)?.value as 'char' | 'inteiro';
  const keyInputValue: string = keyInput.value;
  let key: number;
  let displayKey: string | number;

  if (tipo === 'inteiro') {
    key = parseInt(keyInputValue);
    if (isNaN(key)) {
      output.innerText = 'Por favor, insira um número inteiro válido.';
      return;
    }
    displayKey = key;
  } else {
    if (keyInputValue.length !== 1) {
      output.innerText = 'Por favor, insira exatamente um caractere.';
      return;
    }
    key = keyInputValue.charCodeAt(0);
    displayKey = keyInputValue;
  }

  const index: number = hashFunction(key, tipo);
  const pos: number = hashTable[index].findIndex(item => item.key === key);
  if (pos !== -1) {
    hashTable[index].splice(pos, 1);
    output.innerText = `Chave ${displayKey} removida do bucket ${index}.`;
  } else {
    output.innerText = `Chave ${displayKey} não encontrada.`;
  }
  keyInput.value = '';
  highlightedBucket = -1;
}