"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Elemento = void 0;
var Elemento = /** @class */ (function () {
    function Elemento(conteudo) {
        this.conteudo = conteudo;
    }
    Elemento.prototype.hashCode = function () {
        return this.conteudo; // Exemplo de função hash simples
    };
    Elemento.prototype.getConteudo = function () {
        return this.conteudo;
    };
    Elemento.prototype.setConteudo = function (conteudo) {
        this.conteudo = conteudo;
    };
    Elemento.prototype.toString = function () {
        return "".concat(this.conteudo);
    };
    Elemento.prototype.clone = function () {
        return new Elemento(this.conteudo);
    };
    return Elemento;
}());
exports.Elemento = Elemento;
