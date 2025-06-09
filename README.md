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
- **Resolução de Colisões**: Técnicas como encadeamento (chaining) e sondagem aberta (open addressing).
- **Redimensionamento**: Estratégias para redimensionar dinamicamente a tabela conforme o número de elementos cresce.
- **Testes de Desempenho**: Avaliação de tempo e eficiência para as operações de inserção, remoção e busca.
### Diretórios  
- **`controller`**    
- **`model`**  
- **`view`**
    
## Experiência e Desafios  
O desenvolvimento deste trabalho apresentou os seguintes desafios:
### 1. Escolha e Implementação da Função de Hash
Um dos principais desafios foi escolher uma função de hash eficiente, capaz de distribuir uniformemente os dados pela tabela. A função de hash precisa ser capaz de lidar com diferentes tipos de dados, como números inteiros e strings, para garantir uma boa distribuição e minimizar o número de colisões.

### 2. Resolução de Colisões
Implementar uma estratégia robusta para resolver colisões foi outro desafio significativo. Foram testadas diferentes abordagens, como o encadeamento (chaining) e a sondagem aberta (open addressing). A decisão sobre qual técnica usar foi feita com base no caso de uso e nas características dos dados.

### 3. Manutenção de Desempenho Durante o Redimensionamento
Durante o processo de redimensionamento da tabela hash, houve o desafio de garantir que as operações de inserção, remoção e busca continuassem eficientes, mesmo quando o fator de carga aumentasse significativamente. O redimensionamento dinâmico da tabela precisava ser implementado de forma a não comprometer o desempenho geral do sistema.

### 4. Gerenciamento de Memória
A manipulação eficiente da memória foi um desafio constante, especialmente ao lidar com o redimensionamento da tabela e com a gestão de listas encadeadas para resolução de colisões. Garantir que a alocação de memória fosse realizada de forma eficiente sem desperdiçar recursos foi uma preocupação contínua durante o desenvolvimento.

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
