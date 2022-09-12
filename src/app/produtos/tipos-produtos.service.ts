import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TiposProdutosService {

  private produtos = [
    {id: 1, nome: "amotecedor", valor: 299.99, fabricante:"breash" },
    {id: 2, nome: "mola", valor: 59.99, fabricante:"molax" }
  ]

  constructor() { }

  enviar_id(id: number){
    const dados_selecionados = this.produtos.filter(produto => produto.id === id)
    return dados_selecionados[0]
  }

}

