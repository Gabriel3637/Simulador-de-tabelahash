class Bucket {
    /*
    Identidade: constructor()
    Objetivo: Cria um bucket com a capacidade especificada e profundidade local opcional (padrão é 1).
    Parametros:
    - capacidade: número que define a capacidade máxima do bucket.
    - profundidadeLocal: número que define a profundidade local do bucket (padrão é 1).
    Retorno: Nenhum.
    */
    constructor(capacidade, profundidadeLocal = 0) {
        this.quantidade = 0;
        this.capacidade = capacidade;
        this.profundidadelocal = profundidadeLocal;
        this.itens = [];
    }
    /*
    Identidade: adicionarItem()
    Objetivo: Adiciona um item ao bucket se a capacidade não for excedida.
    Parametros:
    - item: objeto do tipo T que implementa a interface Registro.
    Retorno: booleano indicando se o item foi adicionado com sucesso.
    - true se o item foi adicionado
    - false se a capacidade do bucket foi excedida.
    */
    adicionarItem(item) {
        let resp = false;
        if (this.quantidade < this.capacidade) {
            this.itens.push(item);
            this.quantidade++;
            resp = true;
        }
        return resp;
    }
    /*
    Identidade: removerItem()
    Objetivo: Remove um item do bucket se ele existir.
    Parametros:
    - item: objeto do tipo T que implementa a interface Registro.
    Retorno: booleano indicando se o item foi removido com sucesso.
    - true se o item foi removido
    - false se o item não foi encontrado no bucket.
    */
    removerItem(item) {
        let resp = false;
        const index = this.itens.findIndex(i => i.getConteudo() === item.getConteudo());
        if (index !== -1) {
            this.itens.splice(index, 1);
            this.quantidade--;
            resp = true;
        }
        return resp;
    }
    /*
    Identidade: buscarItem()
    Objetivo: Busca um item no bucket.
    Parametros:
    - item: objeto do tipo T que implementa a interface Registro.
    Retorno: Referência ao item encontrado ou null se não encontrado.
    - Se o item não for encontrado, retorna null.
    - Se o item for encontrado, retorna uma referência ao item.
    */
    buscarItem(item) {
        let resp = null;
        const index = this.itens.findIndex(i => i.getConteudo() === item.getConteudo());
        if (index !== -1) {
            resp = this.itens[index];
        }
        return resp;
    }
    /*
    Identidade: retornarItens()
    Objetivo: Retorna uma cópia dos itens contidos no bucket.
    Parametros: Nenhum.
    Retorno: Array de objetos do tipo T, onde cada objeto é uma cópia dos itens contidos no bucket.
    - Retorna um array de objetos do tipo T.
    */
    retornarItens() {
        let resp = [];
        for (let item of this.itens) {
            resp.push(item.clone());
        }
        return resp;
    }
    /*
    Identidade: resetarBucket()
    Objetivo: Reseta o bucket, removendo todos os itens e definindo a quantidade como zero.
    Parametros: Nenhum.
    Retorno: Nenhum.
    */
    resetarBucket() {
        this.quantidade = 0;
        this.itens = [];
    }
    /*
    Identidade: getQuantidade(), getCapacidade(), getProfundidadeLocal(), getItens(), getItem()
    Objetivo: Métodos de acesso para obter informações sobre o bucket.
    Parametros: Nenhum.
    Retorno:
    - getQuantidade(): Retorna a quantidade de itens no bucket.
    - getCapacidade(): Retorna a capacidade máxima do bucket.
    - getProfundidadeLocal(): Retorna a profundidade local do bucket.
    - getItens(): Retorna um array de itens contidos no bucket.
    - getItem(index: number): Retorna o item no índice especificado, se estiver dentro dos limites do bucket.
    */
    getQuantidade() {
        return this.quantidade;
    }
    getCapacidade() {
        return this.capacidade;
    }
    getProfundidadeLocal() {
        return this.profundidadelocal;
    }
    getItens() {
        return this.itens;
    }
    getItem(index) {
        if (index >= 0 && index < this.quantidade) {
            return this.itens[index];
        }
        else {
            throw new Error("Índice fora dos limites do bucket");
        }
    }
    /*
    Identidade: setQuantidade(), setProfundidadeLocal(), setCapacidade(), setItens()
    Objetivo: Métodos de modificação para definir informações sobre o bucket.
    Parametros:
    - setQuantidade(quantidade: number): Define a quantidade de itens no bucket, se estiver dentro dos limites.
    - setProfundidadeLocal(profundidade: number): Define a profundidade local do bucket.
    - setCapacidade(capacidade: number): Define a capacidade máxima do bucket, se for maior que zero.
    - setItens(itens: T[]): Define os itens do bucket, se o número de itens não exceder a capacidade.
    Retorno:
    - setQuantidade(quantidade: number): Retorna true se a quantidade foi definida com sucesso, false caso contrário.
    - setProfundidadeLocal(profundidade: number): Não retorna nada.
    - setCapacidade(capacidade: number): Retorna true se a capacidade foi definida com sucesso, false caso contrário.
    - setItens(itens: T[]): Retorna true se os itens foram definidos com sucesso, false caso contrário.
    */
    setQuantidade(quantidade) {
        let resp = false;
        if (quantidade >= 0 && quantidade <= this.capacidade) {
            this.quantidade = quantidade;
            resp = true;
        }
        return resp;
    }
    setProfundidadeLocal(profundidade) {
        this.profundidadelocal = profundidade;
    }
    setCapacidade(capacidade) {
        let resp = false;
        if (capacidade > 0) {
            this.capacidade = capacidade;
            resp = true;
        }
        return resp;
    }
    setItens(itens) {
        let resp = false;
        if (itens.length <= this.capacidade) {
            this.itens = itens;
            this.quantidade = itens.length;
            resp = true;
        }
        return resp;
    }
    /*
    Identidade: toString()
    Objetivo: Retorna uma representação em string do bucket, incluindo quantidade, capacidade, profundidade local e itens.
    Parametros: Nenhum.
    Retorno: String representando o bucket.
    - Retorna uma string formatada com as informações do bucket.
    */
    toString() {
        return `Bucket: {quantidade: ${this.quantidade}, capacidade: ${this.capacidade}, profundidade local: ${this.profundidadelocal}, itens: [${this.itens.map(item => item.toString()).join(", ")}]}`;
    }
}
// Exportando a classe bucket para ser usada em outros arquivos
export { Bucket };
