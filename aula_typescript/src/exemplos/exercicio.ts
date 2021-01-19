/*
    Dado um retorno da api, crie funções para as seguintes situações:

    Média de preço do pedido
    Nome do produto mais barato
    filtro por código do produto
    busca de produto por nome
*/

import { somaNotas } from "./arrays";

const api = {
    numeroPedido: '0001',
    cliente: 'Alvaro',
    items: [
        { produto: '0001', descricao: 'XBOX', preco: 5000 },
        { produto: '0002', descricao: 'PS5', preco: 5500 },
        { produto: '0003', descricao: 'PC', preco: 10000 },
        { produto: '0004', descricao: 'SWITCH', preco: 1000 },
        { produto: '0005', descricao: 'ATARI', preco: 500 },
    ],
};


export function exercicioAulaTypeScript() {
    const media = mediaPreco(api);
    const produtoBarato = produtoMaisBarato(api);
    let produto;


    console.log(`A media dos precos eh ${media}`);
    console.log(`O produto mais barato eh o ${produtoBarato}`);

    produto = buscaProduto(api, 'produto', '0003');
    console.log(`filtrando por codigo: ${produto.produto}`, produto);
    produto = buscaProduto(api, 'descricao', 'SWITCH');
    console.log(`buscando por nome  ${produto.descricao}`, produto);

}


export function mediaPreco(api) {

    let total = 0;
    let qted = api.items.length;
    total = api.items.reduce((total, item) => total + item.preco, 0);
    return total / qted;

}

export function produtoMaisBarato(api) {
    let minValue = 0;
    let index = 0;

    api.items.forEach((item, indice) => {
        if (index == 0 || item.preco < minValue) {
            minValue = item.preco;
            index = indice;
        }
    });
    return api.items[index].descricao;
}

export function buscaProduto(obj, chave, valor) {
    let item;
    //obs: o metodo filter retorna todos os registros que atenderem a validacao e o metodo find retorna apenas o primeiro

    /*if (chave == 'produto') {
            item = obj.items.filter((items) => items.produto === valor);
        } else if (chave == 'descricao') {
            item = obj.items.filter((items) => items.descricao === valor);
        }*/
    item = obj.items.find((items) => items[chave] === valor);
    
    return item;
}