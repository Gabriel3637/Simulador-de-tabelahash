import type { Registro } from "./Registro";
class ElementoNumber implements Registro{
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
        return new ElementoNumber(this.conteudo) as this;
    }
}
class ElementoChar implements Registro{
    private conteudo: string;
    constructor(conteudo: string) {
        this.conteudo = conteudo;
    }
    public hashCode(): number {
        return this.conteudo.charCodeAt(0); // Exemplo de função hash simples
    }
    public getConteudo(): string {
        return this.conteudo;
    }
    public setConteudo(conteudo: string): void {
        this.conteudo = conteudo;
    }
    public toString(): string {
        return `${this.conteudo}`;
    }
    public clone(): this {
        return new ElementoChar(this.conteudo) as this;
    }
}

export { ElementoChar };

export { ElementoNumber };