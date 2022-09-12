import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produtos-listagem',
  templateUrl: './produtos-listagem.page.html',
  styleUrls: ['./produtos-listagem.page.scss'],
})
export class ProdutosListagemPage implements OnInit {

  public produtos = [
    {id: 1, nome: "amotecedor", valor: 299.99 },
    {id: 2, nome: "mola", valor: 59.99 }
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
