import {HashExtensivel} from './HashExtensivel';
import {Elemento} from './Elemento';

var tabelaHash: HashExtensivel<Elemento> = new HashExtensivel<Elemento>(4);

let listaItens: Elemento[] = []

listaItens.push(new Elemento(1));
listaItens.push(new Elemento(2));
listaItens.push(new Elemento(3));
listaItens.push(new Elemento(4));
listaItens.push(new Elemento(5));  
listaItens.push(new Elemento(6));   
listaItens.push(new Elemento(7));
listaItens.push(new Elemento(8));
listaItens.push(new Elemento(9));
listaItens.push(new Elemento(10));
listaItens.push(new Elemento(11));
listaItens.push(new Elemento(12));
listaItens.push(new Elemento(13));
listaItens.push(new Elemento(14));
listaItens.push(new Elemento(15));
listaItens.push(new Elemento(16));
listaItens.push(new Elemento(17));
listaItens.push(new Elemento(18));
listaItens.push(new Elemento(19));
listaItens.push(new Elemento(20));
listaItens.push(new Elemento(21));
listaItens.push(new Elemento(22));
listaItens.push(new Elemento(23));
listaItens.push(new Elemento(24));
listaItens.push(new Elemento(25));
listaItens.push(new Elemento(26));
listaItens.push(new Elemento(27));
listaItens.push(new Elemento(28));
listaItens.push(new Elemento(29));
listaItens.push(new Elemento(30));


tabelaHash.adicioonarItens(listaItens);
tabelaHash.print();