"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bucket = void 0;
// Torna a classe Bucket genérica
var Bucket = /** @class */ (function () {
    function Bucket(capacidade, profundidadeLocal) {
        if (profundidadeLocal === void 0) { profundidadeLocal = 1; }
        this.quantidade = 0;
        this.capacidade = capacidade;
        this.profundidadelocal = profundidadeLocal;
        this.itens = [];
    }
    Bucket.prototype.adicionarItem = function (item) {
        var resp = false;
        if (this.quantidade < this.capacidade) {
            this.itens.push(item);
            this.quantidade++;
            resp = true;
        }
        else {
            resp = false;
        }
        return resp;
    };
    Bucket.prototype.retornarItens = function () {
        var resp = [];
        for (var _i = 0, _a = this.itens; _i < _a.length; _i++) {
            var item = _a[_i];
            resp.push(item.clone());
        }
        return resp;
    };
    Bucket.prototype.resetarBucket = function () {
        this.quantidade = 0;
        this.itens = [];
    };
    Bucket.prototype.getQuantidade = function () {
        return this.quantidade;
    };
    Bucket.prototype.getCapacidade = function () {
        return this.capacidade;
    };
    Bucket.prototype.getProfundidadeLocal = function () {
        return this.profundidadelocal;
    };
    Bucket.prototype.getItens = function () {
        return this.itens;
    };
    Bucket.prototype.getItem = function (index) {
        if (index >= 0 && index < this.quantidade) {
            return this.itens[index];
        }
        else {
            throw new Error("Índice fora dos limites do bucket");
        }
    };
    Bucket.prototype.setQuantidade = function (quantidade) {
        var resp = false;
        if (quantidade >= 0 && quantidade <= this.capacidade) {
            this.quantidade = quantidade;
            resp = true;
        }
        return resp;
    };
    Bucket.prototype.setProfundidadeLocal = function (profundidade) {
        this.profundidadelocal = profundidade;
    };
    Bucket.prototype.setCapacidade = function (capacidade) {
        var resp = false;
        if (capacidade > 0) {
            this.capacidade = capacidade;
            resp = true;
        }
        return resp;
    };
    Bucket.prototype.setItens = function (itens) {
        var resp = false;
        if (itens.length <= this.capacidade) {
            this.itens = itens;
            this.quantidade = itens.length;
            resp = true;
        }
        return resp;
    };
    Bucket.prototype.toString = function () {
        return "Bucket: {quantidade: ".concat(this.quantidade, ", capacidade: ").concat(this.capacidade, ", profundidade local: ").concat(this.profundidadelocal, ", itens: [").concat(this.itens.map(function (item) { return item.toString(); }).join(", "), "]}");
    };
    return Bucket;
}());
exports.Bucket = Bucket;
