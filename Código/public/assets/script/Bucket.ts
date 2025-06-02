import { Registro } from "./Registro";  
// Torna a classe Bucket genérica
class Bucket<T extends Registro> {
    private quantidade: number;
    private capacidade: number;
    private profundidadelocal: number;
    private itens: T[];

    constructor(capacidade: number, profundidadeLocal: number = 1) {
        this.quantidade = 0;
        this.capacidade = capacidade;
        this.profundidadelocal = profundidadeLocal;
        this.itens = [];
    }

    public adicionarItem(item: T): boolean {
        let resp: boolean = false;
        if (this.quantidade < this.capacidade) {
            this.itens.push(item);
            this.quantidade++;
            resp = true;
        } else {
            resp = false;
        }
        return resp;
    }

    public retornarItens(): T[] {
        let resp: T[] = [];
        for(let item of this.itens) {
            resp.push(item.clone());
        }
        return resp;
    }

    resetarBucket(): void {
        this.quantidade = 0;
        this.itens = [];
    }

    public getQuantidade(): number {
        return this.quantidade;
    }
    public getCapacidade(): number {
        return this.capacidade;
    }
    public getProfundidadeLocal(): number {
        return this.profundidadelocal;
    }
    public getItens(): T[] {
        return this.itens;
    }
    public getItem(index: number): T {
        if (index >= 0 && index < this.quantidade) {
            return this.itens[index];
        } else {
            throw new Error("Índice fora dos limites do bucket");
        }
    }
    
    public setQuantidade(quantidade: number): boolean {
        let resp: boolean = false;
        if (quantidade >= 0 && quantidade <= this.capacidade) {
            this.quantidade = quantidade;
            resp = true;
        }
        return resp;
    }
    public setProfundidadeLocal(profundidade: number): void {
        this.profundidadelocal = profundidade;
    }
    public setCapacidade(capacidade: number): boolean {
        let resp: boolean = false;
        if (capacidade > 0) {
            this.capacidade = capacidade;
            resp = true;
        }
        return resp;
    }
    public setItens(itens: T[]): boolean {
        let resp: boolean = false;
        if(itens.length <= this.capacidade) {
            this.itens = itens;
            this.quantidade = itens.length;
            resp = true;
        }
        return resp;
    }
    public toString(): string {
        return `Bucket: {quantidade: ${this.quantidade}, capacidade: ${this.capacidade}, profundidade local: ${this.profundidadelocal}, itens: [${this.itens.map(item => item.toString()).join(", ")}]}`;
    }
}

// Exportando a classe bucket para ser usada em outros arquivos
export { Bucket };