# Simulador-de-tabelahash
# Trabalho Prático AEDs 3 - Parte 4 (final)

## Descrição  

Este trabalho prático envolve a implementação de um sistema simulado de uma**Tabela HashExtensível** para os arquivos de dados e índices 
do projeto de tarefas. A funcionalidade principal consiste em buscar todos os arquivos de dados e índices, utilizando o algoritmo de Hash e ordenar e armazená-los em um único arquivo. O objetivo é permitir a compactação eficiente de todos os valores em uma única tabela, além de possibilitar a recuperação dos valores para versões específicas.

### Funcionalidades principais:
. **Armazenamento organizado**: Os backups compactados são salvos em pastas nomeadas com a data/versão do backup.
. **Descompactação e recuperação**: O sistema permite recuperar os arquivos de uma versão específica escolhida pelo usuário.

## Estrutura do Projeto
Este projeto consiste em uma implementação básica de uma tabela hash com os seguintes componentes principais:
- **Função de Hash**: Implementação da função de hash personalizada para distribuir dados pela tabela.
- **Resolução de Colisões**: Técnicas como encadeamento (chaining) e sondagem aberta (open addressing).
- **Redimensionamento**: Estratégias para redimensionar dinamicamente a tabela conforme o número de elementos cresce.
- **Testes de Desempenho**: Avaliação de tempo e eficiência para as operações de inserção, remoção e busca.
### Diretórios  
- **`controller`**:    
   - **Classes principais**:    
- **`model`**:  
   - **Classes principais**:
- **`view`**:  
   Interação com o usuário para exibir informações e realizar operações de backup e recuperação.  
   - **Classes principais**  
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
