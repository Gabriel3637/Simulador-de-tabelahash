import { Bucket } from './Bucket.js';
import { Registro } from './Registro.js';
class HashExtensivel<T extends Registro> {
    private capacidade: number;
    private profundidadeGlobal: number;
    private buckets: Bucket<T>[];

    constructor(capacidade: number) {
        this.capacidade = capacidade;
        this.profundidadeGlobal = 1;
        this.buckets = [];
        this.buckets.push(new Bucket<T>(this.capacidade));
        this.buckets.push(new Bucket<T>(this.capacidade));
    }

    private copiaProfunda(obj: T): T{
        return JSON.parse(JSON.stringify(obj)) as T;
    }

    private expandirBuckets(): void {
        this.profundidadeGlobal++;
        this.buckets.push(...this.buckets);
    }

    private hashCode(n: number): number {
        return n % 2 ** this.profundidadeGlobal; 
    }

    public adicioonarItens(itens: T[]): boolean {
        let resp: boolean = false;
        let i: number = 0;
        do{
            resp = this.adicionarItem(itens[i])
            i++;
        }while(resp === true && i < itens.length);
        return resp;
    }

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