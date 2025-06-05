import type { Registro } from "./Registro";
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