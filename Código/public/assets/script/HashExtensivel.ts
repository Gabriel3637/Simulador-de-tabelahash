import { Bucket } from './Bucket.js';
import type { Registro } from './Registro.js';
class HashExtensivel<T extends Registro> {
    private capacidade: number;
    private profundidadeGlobal: number;
    private buckets: Bucket<T>[];

    /*
    Identidade: constructor()
    Objetivo: Cria uma tabela hash extensível com a capacidade especificada.
    Parâmetros:
    - capacidade: número que define a capacidade máxima de cada bucket.
    Retorno: Nenhum.
    Esta tabela hash começa com dois buckets, ambos com a capacidade especificada.
    */
    constructor(capacidade: number) {
        this.capacidade = capacidade;
        this.profundidadeGlobal = 0;
        this.buckets = [];
        this.buckets.push(new Bucket<T>(this.capacidade));
    }

    /*
    Identidade: expandirBuckets()
    Objetivo: Dobra o número de buckets na tabela hash, aumentando a profundidade global.
    Parâmetros: Nenhum.
    Retorno: Nenhum.
    */
    private expandirBuckets(): void {
        this.profundidadeGlobal++;
        this.buckets.push(...this.buckets);
    }

    /*
    Identidade: hashCode()
    Objetivo: Calcula o índice do bucket para um dado número.
    Parâmetros:
    - n: número para o qual o índice do bucket será calculado.
    Retorno: número que representa o índice do bucket.
    */
    private hashCode(n: number): number {
        return n % 2 ** this.profundidadeGlobal; 
    }

    /*
    Identidade: adicioonarItens()  
    Objetivo: Adiciona múltiplos itens à tabela hash.
    Parâmetros:
    - itens: array de objetos do tipo T que implementa a interface Registro.
    Retorno: booleano indicando se todos os itens foram adicionados com sucesso.
    - true se todos os itens foram adicionados
    - false se algum item não pôde ser adicionado devido à capacidade do bucket.
    */
    public adicioonarItens(itens: T[]): boolean {
        let resp: boolean = false;
        let i: number = 0;
        do{
            resp = this.adicionarItem(itens[i])
            i++;
        }while(resp === true && i < itens.length);
        return resp;
    }

    /*
    Identidade: adicionarItem()
    Objetivo: Adiciona um item à tabela hash extensível.
    Parâmetros:
    - item: objeto do tipo T que implementa a interface Registro.
    Retorno: booleano indicando se o item foi adicionado com sucesso.
    - true se o item foi adicionado
    - false se o item não pôde ser adicionado devido à capacidade do bucket ou se ocorreu uma colisão que não pôde ser resolvida.
    */
    public adicionarItem(item: T): boolean {
        const hash: number = item.hashCode();
        const bucketIndex: number = this.hashCode(hash);
        this.print();
        console.log(`Adicionando item: ${item.toString()} index: ${bucketIndex} hash: ${hash} profundidadeGlobal: ${this.profundidadeGlobal}`);
        const bucket: Bucket<T> = this.buckets[bucketIndex];
        let itemCopia: T = item.clone();
        let resp: boolean = false;

        if (bucket.adicionarItem(itemCopia)) {
            resp = true;
        } else {

            let segBucketIndex: number = 2**bucket.getProfundidadeLocal();
            let itensanteriores: T[] = bucket.retornarItens();
            bucket.resetarBucket();

            if(bucketIndex + segBucketIndex < this.buckets.length && this.buckets[bucketIndex + segBucketIndex] === this.buckets[bucketIndex]){
                this.buckets[bucketIndex + segBucketIndex] = new Bucket<T>(this.capacidade, bucket.getProfundidadeLocal() + 1);
            } else if(bucketIndex - segBucketIndex >= 0 && this.buckets[bucketIndex - segBucketIndex] === this.buckets[bucketIndex]){
                this.buckets[bucketIndex - segBucketIndex] = new Bucket<T>(this.capacidade, bucket.getProfundidadeLocal() + 1);
            } else {
                this.expandirBuckets();
                this.buckets[bucketIndex + segBucketIndex] = new Bucket<T>(this.capacidade, bucket.getProfundidadeLocal() + 1);
            }
            
            bucket.setProfundidadeLocal(bucket.getProfundidadeLocal() + 1);
            console.log(bucket.toString());
            let i: number = 0;
            
            do{
                resp = this.adicionarItem(itensanteriores[i]);
                i = i + 1;
            }while(resp === true && i < itensanteriores.length);
            this.adicionarItem(item);
        }
        return resp;
    }

    /*
    Identidade: buscarItem()
    Objetivo: Busca um item na tabela hash extensível.
    Parâmetros:
    - item: objeto do tipo T que implementa a interface Registro.
    Retorno: Referência ao item encontrado ou null se não encontrado.
    - Se o item não for encontrado, retorna null.
    - Se o item for encontrado, retorna uma referência ao item.
    */
    public buscarItem(item: T): T | null {
        const hash: number = item.hashCode();
        const bucketIndex: number = this.hashCode(hash);
        const bucket: Bucket<T> = this.buckets[bucketIndex];
        console.log(`Buscando item: ${item.toString()} index: ${bucketIndex} hash: ${hash} profundidadeGlobal: ${this.profundidadeGlobal}`);
        return bucket.buscarItem(item);
    }

    /*
    Identidade: removerItem()
    Objetivo: Remove um item da tabela hash extensível.
    Parâmetros:
    - item: objeto do tipo T que implementa a interface Registro.
    Retorno: booleano indicando se o item foi removido com sucesso.
    - true se o item foi removido
    - false se o item não foi encontrado no bucket.
    */
    public removerItem(item: T): boolean {
        const hash: number = item.hashCode();
        const bucketIndex: number = this.hashCode(hash);
        const bucket: Bucket<T> = this.buckets[bucketIndex];
        console.log(`Removendo item: ${item.toString()} index: ${bucketIndex} hash: ${hash} profundidadeGlobal: ${this.profundidadeGlobal}`);
        return bucket.removerItem(item);
    }

    /*
    Identidade: print()
    Objetivo: Imprime o estado atual da tabela hash extensível, incluindo a profundidade global, capacidade e conteúdo de cada bucket.
    Parâmetros: Nenhum.
    Retorno: Nenhum.
    */
    public print(): void {
        console.log(`Profundidade Global: ${this.profundidadeGlobal}`);
        console.log("Capacidade: " + this.capacidade);
        console.log("Buckets:");
        for (let i = 0; i < this.buckets.length; i++) {
            const bucket = this.buckets[i];
            console.log(`Bucket ${i}: ${bucket.toString()}`);
        }
    }

}

export { HashExtensivel };