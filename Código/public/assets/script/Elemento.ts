import { Registro } from "./Registro.js";
class Elemento implements Registro{
    private conteudo: number;
    constructor(conteudo: number) {
        this.conteudo = conteudo;
    }
    public hashCode(): number {
        return this.conteudo; // Exemplo de função hash simples
    }
    public getConteudo(): number {
        return this.conteudo;
    }
    public setConteudo(conteudo: number): void {
        this.conteudo = conteudo;
    }
    public toString(): string {
        return `${this.conteudo}`;
    }
    public clone(): this {
        return new Elemento(this.conteudo) as this;
    }
}

export { Elemento };