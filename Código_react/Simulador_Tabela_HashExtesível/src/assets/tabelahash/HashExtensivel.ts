import { Bucket } from './Bucket.js';

import type { Registro } from './Registro.js';
class HashExtensivel<T extends Registro> {
    private capacidade: number;
    private profundidadeGlobal: number;
    private buckets: Bucket<T>[];

    private desenharRetangulo(x: number, y: number, largura: number, altura: number, cor: string, borda: string = 'black', ctx: CanvasRenderingContext2D, larguraBorda: number = 2) {
        ctx.fillStyle = cor;
        ctx.fillRect(x, y, largura, altura);
        ctx.strokeStyle = borda;
        ctx.lineWidth = larguraBorda;
        ctx.strokeRect(x, y, 100, 50);
    }

    private escrverTexto(x: number, y: number, texto: string, ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'black';
        ctx.font = '16px Arial';
        ctx.fillText(texto, x, y);
    }

    private desenharSeta(fromX: number, fromY: number, toX: number, toY: number, cor: string, ctx: CanvasRenderingContext2D) {
      // Configurações da linha e da ponta da seta
      const headLength = 10; // Tamanho da ponta da seta
      const lineWidth = 2;   // Espessura da linha
      ctx.strokeStyle = cor; // Cor da linha (preto)
      ctx.fillStyle = cor;   // Cor da ponta (preto)
      ctx.lineWidth = lineWidth;

      // Calcula o ângulo da linha
      const dx = toX - fromX;
      const dy = toY - fromY;
      const angle = Math.atan2(dy, dx);

      // Desenha a linha principal
      ctx.beginPath();
      ctx.moveTo(fromX, fromY);
      ctx.lineTo(toX, toY);
      ctx.stroke();

      // Desenha a ponta da seta (triângulo)
      ctx.beginPath();
      ctx.moveTo(toX, toY);
      ctx.lineTo(
        toX - headLength * Math.cos(angle - Math.PI / 6),
        toY - headLength * Math.sin(angle - Math.PI / 6)
      );
      ctx.lineTo(
        toX - headLength * Math.cos(angle + Math.PI / 6),
        toY - headLength * Math.sin(angle + Math.PI / 6)
      );
      ctx.closePath();
      ctx.fill();
    }


    public desenharHashTable(x:number, y:number, pcanvas: React.RefObject<HTMLCanvasElement | null>) {
        let canvas: HTMLCanvasElement | null = pcanvas.current;
        let ctx: CanvasRenderingContext2D | null | undefined = canvas?.getContext('2d');
        
        if(ctx && canvas) {    
            canvas.width = 500+(100*this.capacidade); // Define a largura do canvas
            canvas.height = 150 + (50*(2**this.profundidadeGlobal)); // Define a altura do canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            this.desenharRetangulo(x, y, 100, 50, 'gray', 'black', ctx);
            this.escrverTexto(x + 30, y + 30, `P: ${this.profundidadeGlobal}`, ctx);
            for (let i = 0; i < this.buckets.length; i++) {
                let posProxY: number = y + ((i+1)*50);
                let posBucketX: number = x + 400;
                this.desenharRetangulo(x, posProxY, 100, 50, 'white', 'black', ctx);
            }
            for (let i = 0; i < this.buckets.length; i++) {
                let bucket: Bucket<T> = this.buckets[i];
                let posProxY: number = y + ((i+1)*50);
                let posBucketX: number = x + 400;
                let passo = 2**bucket.getProfundidadeLocal();
                if(bucket.getProfundidadeLocal() < this.profundidadeGlobal) {
                    if(i < passo){
                        this.desenharRetangulo(x + 200, posProxY, 100, 50, 'lightgray', 'black', ctx);
                        this.escrverTexto(x + 210, posProxY + 30, `P\': ${bucket.getProfundidadeLocal()}`, ctx);
                        this.desenharRetangulo(x + 300, posProxY, 100, 50, 'lightgray', 'black', ctx);
                        this.escrverTexto(x + 310, posProxY + 30, `C: ${bucket.getQuantidade()}`, ctx);
                        for (let j = 0; j < this.buckets[i].getCapacidade(); j++) {
                            this.desenharRetangulo(posBucketX + (j * 100), posProxY, 100, 50, 'white', 'black', ctx);
                        }
                        for(let j = 0; j < bucket.getQuantidade(); j++) {
                            let item: T = bucket.getItem(j);
                            this.escrverTexto(posBucketX + (j * 100) + 30, posProxY + 30, item.toString(), ctx);
                        }
                        for(let j =  i+passo; j < this.buckets.length; j= j + passo) {
                            let posBucketRepetidoY: number =  y + ((j+1)*50);
                            this.desenharSeta(x+50, posBucketRepetidoY + 25, x + 200, posProxY + (y*0.5), 'lightblue', ctx);
                        }
                        this.desenharSeta(x+50, posProxY + 25, x + 200, posProxY + (y*0.5), 'black', ctx);
                    }
                } else {   
                    this.desenharSeta(x+50, posProxY + 25, x + 200, posProxY + (y*0.5), 'black', ctx);
                    this.desenharRetangulo(x + 200, posProxY, 100, 50, 'lightgray', 'black', ctx);
                    this.escrverTexto(x + 210, posProxY + 30, `P\': ${bucket.getProfundidadeLocal()}`, ctx);
                    this.desenharRetangulo(x + 300, posProxY, 100, 50, 'lightgray', 'black', ctx);
                    this.escrverTexto(x + 310, posProxY + 30, `C: ${bucket.getQuantidade()}`, ctx);
                    for (let j = 0; j < this.buckets[i].getCapacidade(); j++) {
                        this.desenharRetangulo(posBucketX + (j * 100), posProxY, 100, 50, 'white', 'black', ctx);
                    }
                    for(let j = 0; j < bucket.getQuantidade(); j++) {
                        let item: T = bucket.getItem(j);
                        this.escrverTexto(posBucketX + (j * 100) + 30, posProxY + 30, item.toString(), ctx);
                    }
                }
            }
        } 
    }
    private esperar(ms: number): Promise<void> {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    /*
    Identidade: constructor()
    Objetivo: Cria uma tabela hash extensível com a capacidade especificada.
    Parâmetros:
    - capacidade: número que define a capacidade máxima de cada bucket.
    Retorno: Nenhum.
    Esta tabela hash começa com dois buckets, ambos com a capacidade especificada.
    */
    constructor(capacidade: number, pcanvas: React.RefObject<HTMLCanvasElement | null>, elementos: T[] = []) {
        this.capacidade = capacidade;
        this.profundidadeGlobal = 0;
        this.buckets = [];
        this.buckets.push(new Bucket<T>(this.capacidade));
        if(elementos.length > 0) {
            this.adicioonarItens(elementos); // Adiciona um bucket inicial
        }
        this.desenharHashTable(50, 50, pcanvas);
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
        //this.print();
        console.log(`Adicionando item: ${item.toString()} index: ${bucketIndex} hash: ${hash} profundidadeGlobal: ${this.profundidadeGlobal}`);
        const bucket: Bucket<T> = this.buckets[bucketIndex];
        let itemCopia: T = item.clone();
        let resp: boolean = false;
        if(bucket.buscarItem(itemCopia) === null) {
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
    public buscarItem(item: T, pcanvas: React.RefObject<HTMLCanvasElement | null>): T | null {
        const hash: number = item.hashCode();
        const bucketIndex: number = this.hashCode(hash);
        const bucket: Bucket<T> = this.buckets[bucketIndex];
        let canvas: HTMLCanvasElement | null = pcanvas.current;
        let ctx: CanvasRenderingContext2D | null | undefined = canvas?.getContext('2d');
        if (ctx && canvas) {
            this.desenharRetangulo(50, (100 + (bucketIndex+1)*50), 100, 50, 'rgba(0, 0, 0, 0.0)', 'green', ctx, 2);
        }
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