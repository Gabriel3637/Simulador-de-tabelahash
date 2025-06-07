import { HashExtensivel } from "./HashExtensivel";
import { Bucket} from "./Bucket";
import type React from "react";
import type { Registro } from "./Registro";

class DesenharHashExtensivel {
    private hashExtensivel: HashExtensivel<Registro>;
    private canvas: HTMLCanvasElement | null
    private ctx: CanvasRenderingContext2D | null;
    private coresRGB: string[];

    /*
    Identidade: construtor()
    Objetivo: Cria uma instância da classe DesenharHashExtensível para desenhar a tabela especificada no canvas expecificado
    Parâmetros:
    - hashExtensivel: Instância da classe HashExtensivel para ser representado
    - canvas: Referência do canvas no react
    Retorno: Nenhum
    */
    constructor(hashExtensivel: HashExtensivel<Registro>, canvas: React.RefObject<HTMLCanvasElement | null>) {
        this.hashExtensivel = hashExtensivel;
        this.canvas = canvas.current
        this.ctx = this.canvas ? this.canvas.getContext("2d"): null;
        this.coresRGB = [
            'rgb(255, 65, 54)',   // Vermelho vibrante
            'rgb(0, 128, 255)',   // Azul claro
            'rgb(46, 204, 113)',  // Verde esmeralda
            'rgb(255, 159, 26)',  // Laranja
            'rgb(153, 51, 255)',  // Roxo
            'rgb(255, 204, 0)',   // Amarelo
            'rgb(0, 204, 204)',   // Ciano
            'rgb(231, 76, 60)',   // Vermelho alaranjado
            'rgb(52, 152, 219)',  // Azul céu
            'rgb(39, 174, 96)',   // Verde jade
            'rgb(241, 196, 15)',  // Amarelo mostarda
            'rgb(142, 68, 173)',  // Roxo escuro
            'rgb(26, 188, 156)',  // Turquesa
            'rgb(211, 84, 0)',    // Laranja escuro
            'rgb(127, 140, 141)'  // Cinza azulado
        ];
    }

    /*
    Identidade: atualizarCanvas()
    Objetivo: Atualizar a referência para o canvas
    Parâmetros:
    - canvas: Referência do canvas no react
    Retorno: Nenhum
    */
    public atualizarCanvas(canvas: React.RefObject<HTMLCanvasElement | null>) {
        this.canvas = canvas.current;
        this.ctx = this.canvas ? this.canvas.getContext("2d") : null;
    }

    /*
    Identidade: atualizarCanvas()
    Objetivo: Atualizar a referência para a instância da classe HashExtensivel
    Parâmetros:
    - hashExtensivel: Referência da instância da classe HashExtensivel
    Retorno: Nenhum
    */
    public atualizarHashExtensível(hashExtensivel: HashExtensivel<Registro>){
        this.hashExtensivel = hashExtensivel;
    }

    /*
    Identidade: desenharRetangulo()
    Objetivo: Desenhar um retângulo
    Parâmetros:
    -x: Numero da posição no eixo x inicial da diagonal superior do retângulo
    -y: Numero da posição no eixo y inicial da diagonal superior do retângulo
    -largura: Número da largura do retângulo
    -altura: Número da altura do retângulo
    -cor: String com a cor do fundo do retângulo
    -borda: String da cor da borda
    -larguraBorda: Espessura da borda
    Retorno: Nenhum
    */

    private desenharRetangulo(x: number, y: number, largura: number, altura: number, cor: string = 'white', borda: string = 'black', larguraBorda: number = 2) {
        if(this.ctx && this.canvas){
            this.ctx.fillStyle = cor;
            this.ctx.fillRect(x, y, largura, altura);
            this.ctx.strokeStyle = borda;
            this.ctx.lineWidth = larguraBorda;
            this.ctx.strokeRect(x, y, largura, altura);
        } else {
            console.error("Contexto do canvas não está disponível.");
            throw new Error("Contexto do canvas não está disponível.");
        }
    }

    /*
    Identidade: desenharSeta()
    Objetivo: Desenhar uma que aponta de uma posição inicial para outra
    Parâmetros:
    -fromX: Número da posição inicial no eixo X da seta
    -fromY: Número da Posição inicial no eixo Y da seta
    -toX: Número da posição final no eixo X da seta
    -toY: Número da posição filal no eixo Y da seta
    -cor: String da cor da seta
    -espessura: Número da espessura da seta
    -pontaTamanho: Número do tamanho da ponta da seta
    Retorno: Nenhum
    */
    private desenharSeta(fromX: number, fromY: number, toX: number, toY: number, cor: string = 'black', espessura: number = 2, pontaTamanho: number = 10) {
        if(this.ctx && this.canvas){
            // Configurações da linha e da ponta da seta
            this.ctx.strokeStyle = cor; // Cor da linha (preto)
            this.ctx.fillStyle = cor;   // Cor da ponta (preto)
            this.ctx.lineWidth = espessura;   // Espessura da linha

            // Calcula o ângulo da linha
            const dx = toX - fromX;
            const dy = toY - fromY;
            const angle = Math.atan2(dy, dx);

            // Desenha a linha principal
            this.ctx.beginPath();
            this.ctx.moveTo(fromX, fromY);
            this.ctx.lineTo(toX, toY);
            this.ctx.stroke();

            // Desenha a ponta da seta (triângulo)
            this.ctx.beginPath();
            this.ctx.moveTo(toX, toY);
            this.ctx.lineTo(
                toX - pontaTamanho * Math.cos(angle - Math.PI / 6),
                toY - pontaTamanho * Math.sin(angle - Math.PI / 6)
            );
            this.ctx.lineTo(
                toX - pontaTamanho * Math.cos(angle + Math.PI / 6),
                toY - pontaTamanho * Math.sin(angle + Math.PI / 6)
            );
            this.ctx.closePath();
            this.ctx.fill();
        } else {
            console.error("Contexto do canvas não está disponível.");
            throw new Error("Contexto do canvas não está disponível.");
        }
    }

    /*
    Identidade: escrverTexto()
    Objetivo: Desenhar texto específico no canvas
    Parâmetros:
    - x: Número da posição no eixo X da palavra
    - y: Número da posição no eixo Y da palavra
    - cor: String contendo a cor do texto
    - tamanhoFonte: String contendo o tamanho e a fonte respectivamente
    Retorno: Nenhum
    */
    private escrverTexto(x: number, y: number, texto: string, cor: string = 'black', tamanhoFonte: string = '16px Arial') {
        if(this.ctx && this.canvas) {
            this.ctx.fillStyle = cor;
            this.ctx.font = tamanhoFonte;
            this.ctx.fillText(texto, x, y);
        } else {
            console.error("Contexto do canvas não está disponível.");
            throw new Error("Contexto do canvas não está disponível.");
        }
    }

    /*
    Identidade: corAleatoriaRGB()
    Objetivo: Gerar uma cor sólida aleatória
    Parâmetros: Nenhum
    Retorno: String contendo o rgba da cor aleatória
    */
    private corAleatoriaRGB(): string {
        const r = Math.floor(23 + Math.random() * 200);
        const g = Math.floor(23 + Math.random() * 200);
        const b = Math.floor(23 + Math.random() * 200);
        const a = 1.0
        return `rgb(${r}, ${g}, ${b}, ${a})`;
    }

    /*
    Identidade: desenharHashTable()
    Objetivo: Desenhar a tabela hash no canvas
    Parâmetros:
    - x: Número da posição inicial no eixo X da tabelaHash
    - y: Número da posição inicial no eixo Y da tabelaHash
    Retorno: Nenhum
    */
    public desenharHashTable(x:number, y:number) {
        try {
            if(this.ctx && this.canvas) {
                let contadorCor = 0;   
                this.ctx.beginPath(); 
                this.canvas.width = 525+(100*this.hashExtensivel.getCapacidade()); // Define a largura do canvas
                this.canvas.height = 150 + (50*(2**this.hashExtensivel.getProfundidadeGlobal())); // Define a altura do canvas
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height); //Limpar o canvas
                this.desenharRetangulo(x+50, y, 100, 50, 'gray'); //Desenha o retângulo com a profundidade da tabela
                this.escrverTexto(x + 80, y + 30, `P: ${this.hashExtensivel.getProfundidadeGlobal()}`); //Escreve a profundidade
                for (let i = 0; i < this.hashExtensivel.getBuckets().length; i++) {
                    //Desenha todos os apontadores para bucket do hash
                    let posProxY: number = y + ((i+1)*50);
                    this.escrverTexto(x, posProxY + 30, `${i}`)
                    this.desenharRetangulo(x+50, posProxY, 100, 50);
                }
                for (let i = 0; i < this.hashExtensivel.getBuckets().length; i++) {
                    //Desenha todos os buckets
                    let bucket: Bucket<Registro> = this.hashExtensivel.getBuckets()[i];
                    let posProxY: number = y + ((i+1)*50);
                    let posBucketX: number = x + 450;
                    let passo = 2**bucket.getProfundidadeLocal();
                    if(bucket.getProfundidadeLocal() < this.hashExtensivel.getProfundidadeGlobal()) {
                        if(i < passo){
                            this.desenharRetangulo(x + 250, posProxY, 100, 50, 'lightgray');
                            this.escrverTexto(x + 260, posProxY + 30, `P\': ${bucket.getProfundidadeLocal()}`);
                            this.desenharRetangulo(x + 350, posProxY, 100, 50, 'lightgray');
                            this.escrverTexto(x + 360, posProxY + 30, `C: ${bucket.getQuantidade()}`);
                            for (let j = 0; j < this.hashExtensivel.getBuckets()[i].getCapacidade(); j++) {
                                this.desenharRetangulo(posBucketX + (j * 100), posProxY, 100, 50);
                            }
                            for(let j = 0; j < bucket.getQuantidade(); j++) {
                                let item: Registro = bucket.getItem(j);
                                this.escrverTexto(posBucketX + (j * 100) + 30, posProxY + 30, item.toString());
                            }
                            let corAtual = this.coresRGB[contadorCor]
                            if(contadorCor < 14){
                                contadorCor = contadorCor + 1;
                            } else {
                                contadorCor = 0;
                            }
                            //Desenhar setas apontando para os buckets originais
                            for(let j =  i+passo; j < this.hashExtensivel.getBuckets().length; j= j + passo) {
                                let posBucketRepetidoY: number =  y + ((j+1)*50);
                                this.desenharSeta(x+100, posBucketRepetidoY + 25, x + 250, posProxY + (y*0.5), corAtual);
                            }
                            this.desenharSeta(x+100, posProxY + 25, x + 250, posProxY + (y*0.5), 'black', 3, 15);
                        }
                    } else {   
                        this.desenharSeta(x+100, posProxY + 25, x + 250, posProxY + (y*0.5), 'black', 3, 15);
                        this.desenharRetangulo(x + 250, posProxY, 100, 50, 'lightgray');
                        this.escrverTexto(x + 260, posProxY + 30, `P\': ${bucket.getProfundidadeLocal()}`);
                        this.desenharRetangulo(x + 350, posProxY, 100, 50, 'lightgray');
                        this.escrverTexto(x + 360, posProxY + 30, `C: ${bucket.getQuantidade()}`);
                        for (let j = 0; j < this.hashExtensivel.getBuckets()[i].getCapacidade(); j++) {
                            this.desenharRetangulo(posBucketX + (j * 100), posProxY, 100, 50);
                        }
                        for(let j = 0; j < bucket.getQuantidade(); j++) {
                            let item: Registro = bucket.getItem(j);
                            this.escrverTexto(posBucketX + (j * 100) + 30, posProxY + 30, item.toString());
                        }
                    }
                }
            } else {
                console.error("Contexto do canvas não está disponível.");
                throw new Error("Contexto do canvas não está disponível.");
            }
        } catch (error) {
            console.error("Erro ao desenhar a tabela hash extensível:", error);
            throw new Error("Erro ao desenhar a tabela hash extensível: " + error);
        }
    }

    /*
    Identidade: desenharBusca();
    Objetivo: Realizar a animação da busca na tabela Hash
    Parâmetros:
    - x: Número da posição inicial no eixo X da tabelaHash
    - y: Número da posição inicial no eixo Y da tabelaHash
    - posicaoBucket: Posição do bucket na tabela hash a ser encontrado
    - posicaoItem: Posição do item no bucket a ser encontrado
    Retorno: Nenhum
    */
    public desenharBusca(x:number, y: number, posicaoBucket:number, posicaoItem:number){
        let bucket: Bucket<Registro> = this.hashExtensivel.getBuckets()[posicaoBucket];
        let posX:number = x + 50;
        let posY:number = y;
        let posYPrimeiroItem: number = posicaoBucket;
        let posicaoEncontrar: number = posicaoItem;
        let contador: number = 0;
        if(posicaoEncontrar === -1 && bucket.getQuantidade() !== bucket.getCapacidade()){
            posicaoEncontrar = bucket.getQuantidade();
        } else {
            posicaoEncontrar = bucket.getQuantidade() - 1;
        }
        

        if(this.ctx && this.canvas){
            //Animar busca no bucket
            const animateX = (time: DOMHighResTimeStamp)=>{
                if(this.ctx && this.canvas){
                    
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.width);
                    this.ctx.beginPath();
                    this.desenharHashTable(50, 50);
                    this.desenharRetangulo(posX, 100 + (posYPrimeiroItem * 50), 100, 50, 'rgba(0, 0, 0, 0.0)', 'blue', 3);
                    posX = posX + 2;
                    if(posX < 501+(posicaoEncontrar * 100)){
                        requestAnimationFrame(animateX);
                    } else if(posicaoItem === -1){
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.width);
                        this.ctx.beginPath();
                        this.desenharHashTable(50, 50);
                        this.desenharRetangulo(posX -1, 100 + (posYPrimeiroItem * 50), 100, 50, 'rgba(0, 0, 0, 0.0)', 'red', 3);
                    }


                }

            }

            const animateSeta = (time: DOMHighResTimeStamp) => {
                this.desenharSeta(x+100, 125 + (50 * posicaoBucket), x+250, 125 + (posYPrimeiroItem * 50), 'blue', 3, 15);
                contador = contador + 1;
                if(contador < 40){
                    requestAnimationFrame(animateSeta);
                }else{
                    posX = x + 450;
                    requestAnimationFrame(animateX);
                }

            }

            const animaIndice = (time: DOMHighResTimeStamp) => {
                this.escrverTexto(x, 130 + (50 * posicaoBucket), `${posicaoBucket}`, 'blue', 'bold  16px Arial');
                contador = contador + 1;
                if(contador < 40){
                    requestAnimationFrame(animaIndice);
                }else{
                    contador = 0;
                    requestAnimationFrame(animateY);
                }
            }

            const animateY = (time: DOMHighResTimeStamp)=>{
                console.log(posicaoBucket);
                this.desenharHashTable(x, y);
                this.desenharRetangulo(x+50, y + 50 + (50 * posicaoBucket), 100, 50,  'rgba(0, 0, 0, 0.0)', 'blue', 3);
                contador = contador + 1;
                if(contador < 40){
                    requestAnimationFrame(animateY);
                }else{
                     if(bucket.getProfundidadeLocal() < this.hashExtensivel.getProfundidadeGlobal()){
                        posYPrimeiroItem = posicaoBucket % (2**bucket.getProfundidadeLocal());
                    }
                    contador = 0;
                    posX = x + 450;
                    requestAnimationFrame(animateSeta);
                }
            }
            //Animar busca no hash
            /*
            const animateY = (time: DOMHighResTimeStamp)=>{
                if(this.ctx && this.canvas){  
                    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.width);
                    this.ctx.beginPath()
                    this.desenharHashTable(50, 50);

                    this.desenharRetangulo(posX, posY + 50, 100, 50, 'rgba(0, 0, 0, 0.0)', 'blue', 3);
                    posY = posY + 1;
                    if(posY < 50 + (50 * posicaoBucket)){
                        requestAnimationFrame(animateY);
                    }else{
                        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.width);
                        this.ctx.beginPath()
                        this.desenharHashTable(50, 50);

                        
                        if(bucket.getProfundidadeLocal() < this.hashExtensivel.getProfundidadeGlobal()){
                            posYPrimeiroItem = posicaoBucket % (2**bucket.getProfundidadeLocal());
                        }

                        requestAnimationFrame(animateSeta);
                        
                        
                    }
                }

            }*/
            requestAnimationFrame(animaIndice);
        }
    }
    
}

export { DesenharHashExtensivel };
