"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ElementoChar = void 0;
class ElementoChar {
    constructor(conteudo) {
        this.conteudo = conteudo;
    }
    hashCode() {
        return this.conteudo.charCodeAt(0); // Exemplo de função hash simples
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
        return new ElementoChar(this.conteudo);
    }
}
exports.ElementoChar = ElementoChar;
