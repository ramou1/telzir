import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public calculo: any = { codOrigem: "11", codDestino: "16", tempoLigacao: "80", plano: "30" };
  disableButton: boolean = false; 
  valores: boolean = false; 
  precoNormal: number = 0.0;
  precoPlano: number = 0.0;

  ngOnInit(): void {  
  }

  alterarOrigem(valor) {
    this.calculo.codOrigem = valor;
  }

  alterarDestino(valor) {
    this.calculo.codDestino = valor;
  }

  calculoPlano(valor) {
    this.precoPlano = 0;
    if(this.calculo.tempoLigacao > parseInt(this.calculo.plano)) {
      this.precoPlano = (this.calculo.tempoLigacao - parseInt(this.calculo.plano)) * ((0.1 * valor) + valor);
    } 
  }

  calculoFinal() {
    // this.disableButton = true;
    this.valores = true;

    if(this.calculo.codOrigem == "11") {
      if(this.calculo.codDestino == "16") {
        this.precoNormal = this.calculo.tempoLigacao * 1.9;
        this.calculoPlano(1.9);
      }
      else if(this.calculo.codDestino == "17") {
        this.precoNormal = this.calculo.tempoLigacao * 1.7;
        this.calculoPlano(1.7);
      }
      else if(this.calculo.codDestino == "18") {
        this.precoNormal = this.calculo.tempoLigacao * 0.9;
        this.calculoPlano(0.9);
      }
      else {
        this.precoNormal = 0;
        this.precoPlano = 0;
      }
    }

    else if(this.calculo.codOrigem == "16") {
      if(this.calculo.codDestino == "11") {
        this.precoNormal = this.calculo.tempoLigacao * 2.9;
        this.calculoPlano(2.9);
      }
      else {
        this.precoNormal = 0;
        this.precoPlano = 0;
      }
    }

    else if(this.calculo.codOrigem == "17") {
      if(this.calculo.codDestino == "11") {
        this.precoNormal = this.calculo.tempoLigacao * 2.7;
        this.calculoPlano(2.7);
      }
      else {
        this.precoNormal = 0;
        this.precoPlano = 0;
      }
    }

    else if(this.calculo.codOrigem == "18") {
      if(this.calculo.codDestino == "11") {
        this.precoNormal = this.calculo.tempoLigacao * 1.9;
        this.calculoPlano(1.9);
      }
      else {
        this.precoNormal = 0;
        this.precoPlano = 0;
      }
    }

    console.log("dados: ", this.calculo);
  }

}
