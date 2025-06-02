interface Registro {
    hashCode(): number; 
    toString(): string;
    getConteudo(): number;
    clone(): this;
}

export {Registro};