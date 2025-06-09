# Simulador-de-tabelahash
# Trabalho Prático AEDs 3 - Parte 4 (final)

## Descrição  

Este trabalho prático envolve a implementação de um sistema simulado de uma**Tabela HashExtensível** para os arquivos de dados e índices 
do projeto de tarefas. A funcionalidade principal consiste em buscar todos os arquivos de dados e índices, utilizando o algoritmo de Hash e ordenar e armazená-los em um único arquivo. O objetivo é permitir a compactação eficiente de todos os valores em uma única tabela, além de possibilitar a recuperação dos valores para versões específicas.

### Funcionalidades principais:
### 1. Inserção de Elementos
Permite inserir elementos na tabela hash, mapeando-os para índices específicos utilizando uma função de hash.

### 2. Resolução de Colisões
Implementa técnicas como encadeamento (chaining) e sondagem aberta (open addressing) para lidar com colisões de forma eficiente.

### 3. Busca de Elementos
Permite buscar elementos na tabela hash, retornando a posição onde o item foi armazenado, caso exista.

### 4. Remoção de Elementos
Permite remover elementos da tabela hash, ajustando a estrutura para manter a consistência.

### 5. Redimensionamento Dinâmico
Redimensiona automaticamente a tabela quando o fator de carga atinge um limite, garantindo desempenho ideal.

### 6. Visualização Gráfica
Oferece uma interface visual interativa para acompanhar a distribuição dos elementos e a resolução de colisões em tempo real.

## Estrutura do Projeto
Este projeto consiste em uma implementação básica de uma tabela hash com os seguintes componentes principais:
- **Função de Hash**: Implementação da função de hash personalizada para distribuir dados pela tabela.
- **Resolução de Colisões**: Não é possível inserir dados iguais, é calculado o hash e no respectivo bucket a busca do valor a ser inserido caso exista a inserção gera um erro.
- **Redimensionamento**: Estratégias para redimensionar dinamicamente a tabela conforme o número de elementos cresce.
### Diretórios  
- **`controller`**    
- **`model`**  
- **`view`**
    
## Experiência e Desafios  
O desenvolvimento deste trabalho apresentou os seguintes desafios:
### 1. Implementação da Tabela Hash Extensível 
Implementar da forma correta uma Tabela Hash extensível principalmente as operações de expansão do hash.

### 2 Gerenciamento de Memória
A manipulação eficiente da memória foi um desafio constante, especialmente ao lidar com o redimensionamento da tabela e com a gestão de listas encadeadas. Garantir que a alocação de memória fosse realizada de forma eficiente sem desperdiçar recursos foi uma preocupação contínua durante o desenvolvimento.

### 3 Visualição gráfica
Implementar a visualização gráfica exigiu conhecimento sobre manipulação da tag <canvas>, tornando necessário a criação de uma classe com esse intuito, com maior dificuldade na representação de diferentens endereços no hash apontando para o mesmo bucket.

Apesar desses desafios, todos os requisitos foram implementados com sucesso, e os resultados atingiram as expectativas.  

## Checklist

- A visualização interativa da Tabela Hash Extensível foi criada?
    ```
    SIM
    ```
- Há um vídeo de até 2 minutos demonstrando o uso da visualização?
    ```
    SIM
    ```
- O trabalho está funcionando corretamente?
    ```
    SIM
    ```
- O trabalho está completo?
    ```
    SIM
    ```
- O trabalho é original e não a cópia de um trabalho de um colega?  
    ```
    SIM
    ```

## Integrantes
- Alexandre Niess
- Gabriel Valedo
- Henrique Giberti
- Leonardo Amaral 
