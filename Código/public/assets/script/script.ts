

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

}