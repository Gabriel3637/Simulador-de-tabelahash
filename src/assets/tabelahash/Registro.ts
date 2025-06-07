interface Registro {
    hashCode(): number; 
    toString(): string;
    getConteudo(): number | string;
    clone(): this;
}

export type {Registro};