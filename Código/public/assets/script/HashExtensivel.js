"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HashExtensivel = void 0;
var Bucket_js_1 = require("./Bucket.js");
var HashExtensivel = /** @class */ (function () {
    function HashExtensivel(capacidade) {
        this.capacidade = capacidade;
        this.profundidadeGlobal = 1;
        this.buckets = [];
        this.buckets.push(new Bucket_js_1.Bucket(this.capacidade));
        this.buckets.push(new Bucket_js_1.Bucket(this.capacidade));
    }
    HashExtensivel.prototype.copiaProfunda = function (obj) {
        return JSON.parse(JSON.stringify(obj));
    };
    HashExtensivel.prototype.expandirBuckets = function () {
        var _a;
        this.profundidadeGlobal++;
        (_a = this.buckets).push.apply(_a, this.buckets);
    };
    HashExtensivel.prototype.hashCode = function (n) {
        return n % Math.pow(2, this.profundidadeGlobal);
    };
    HashExtensivel.prototype.adicioonarItens = function (itens) {
        var resp = false;
        var i = 0;
        do {
            resp = this.adicionarItem(itens[i]);
            i++;
        } while (resp === true && i < itens.length);
        return resp;
    };
    HashExtensivel.prototype.adicionarItem = function (item) {
        var hash = item.hashCode();
        var bucketIndex = this.hashCode(hash);
        this.print();
        console.log("Adicionando item: ".concat(item.toString(), " index: ").concat(bucketIndex, " hash: ").concat(hash, " profundidadeGlobal: ").concat(this.profundidadeGlobal));
        var bucket = this.buckets[bucketIndex];
        var itemCopia = item.clone();
        var resp = false;
        if (bucket.adicionarItem(itemCopia)) {
            resp = true;
        }
        else {
            var segBucketIndex = Math.pow(2, bucket.getProfundidadeLocal());
            var itensanteriores = bucket.retornarItens();
            bucket.resetarBucket();
            if (bucketIndex + segBucketIndex < this.buckets.length && this.buckets[bucketIndex + segBucketIndex] === this.buckets[bucketIndex]) {
                this.buckets[bucketIndex + segBucketIndex] = new Bucket_js_1.Bucket(this.capacidade, bucket.getProfundidadeLocal() + 1);
            }
            else if (bucketIndex - segBucketIndex >= 0 && this.buckets[bucketIndex - segBucketIndex] === this.buckets[bucketIndex]) {
                this.buckets[bucketIndex - segBucketIndex] = new Bucket_js_1.Bucket(this.capacidade, bucket.getProfundidadeLocal() + 1);
            }
            else {
                this.expandirBuckets();
                this.buckets[bucketIndex + segBucketIndex] = new Bucket_js_1.Bucket(this.capacidade, bucket.getProfundidadeLocal() + 1);
            }
            bucket.setProfundidadeLocal(bucket.getProfundidadeLocal() + 1);
            console.log(bucket.toString());
            var i = 0;
            do {
                resp = this.adicionarItem(itensanteriores[i]);
                i = i + 1;
            } while (resp === true && i < itensanteriores.length);
            this.adicionarItem(item);
        }
        return resp;
    };
    HashExtensivel.prototype.print = function () {
        console.log("Profundidade Global: ".concat(this.profundidadeGlobal));
        console.log("Capacidade: " + this.capacidade);
        console.log("Buckets:");
        for (var i = 0; i < this.buckets.length; i++) {
            var bucket = this.buckets[i];
            console.log("Bucket ".concat(i, ": ").concat(bucket.toString()));
        }
    };
    return HashExtensivel;
}());
exports.HashExtensivel = HashExtensivel;
