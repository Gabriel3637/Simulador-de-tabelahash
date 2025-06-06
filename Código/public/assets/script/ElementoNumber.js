class ElementoNumber {
    constructor(conteudo) {
        this.conteudo = conteudo;
    }
    hashCode() {
        return this.conteudo; // Exemplo de função hash simples
    }
    getConteudo() {
        return this.conteudo;
    }
    setConteudo(conteudo) {
        this.conteudo = conteudo;
    }
    toString() {
        return `${this.conteudo}`;
    }
    clone() {
        return new ElementoNumber(this.conteudo);
    }
}
export { ElementoNumber };
