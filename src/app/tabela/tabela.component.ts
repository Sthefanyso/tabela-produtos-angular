import { Component, OnInit } from '@angular/core';
import { ProdutosService } from '../produtos.service';
import { Produto } from '../produto';

@Component({
  selector: 'app-tabela',
  templateUrl: './tabela.component.html',
  styleUrls: ['./tabela.component.css']
})
export class TabelaComponent implements OnInit {

  produtos: Produto[] = [];

  constructor (private produtoService: ProdutosService){}

  ngOnInit(): void{
      this.loadProdutos();
    }

  loadProdutos(){
    this.produtoService.getProdutos().subscribe(
      {
        next: data => this.produtos = data,
        error: (msg) => console.log("Erro" + msg)
      }
    )
  }
}
