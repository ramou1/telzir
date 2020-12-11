import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it('O resultado deve ser $38,00 Sem Fale Mais, $0,00 Com Fale Mais e Plano Fale Mais 30', function() {
    // Origem: 011  Destino: 016  Tempo: 20  Plano: FaleMais30  ComFaleMais: $0,00  SemFaleMais: $38,00
    component.calculo.codOrigem = "11";
    component.calculo.codDestino = "16";
    component.calculo.tempoLigacao = 20;
    component.calculo.plano = "30"; 

    component.calculoFinal();
    fixture.detectChanges();
    expect(component.precoPlano).toEqual(0);
    expect(component.precoNormal).toEqual(38);
  });

  it('O resultado deve ser $136,00 Sem Fale Mais, $37,40 Com Fale Mais e Plano Fale Mais 60', function() {
    // Origem: 011  Destino: 017  Tempo: 80  Plano: FaleMais60  ComFaleMais: $37,40  SemFaleMais: $136,00
    component.calculo.codOrigem = "11";
    component.calculo.codDestino = "17";
    component.calculo.tempoLigacao = 80;
    component.calculo.plano = "60"; 

    component.calculoFinal();
    fixture.detectChanges();
    expect(component.precoPlano).toEqual(37.40);
    expect(component.precoNormal).toEqual(136);
  });

  it('O resultado deve ser $380,00 Sem Fale Mais, $167,20 Com Fale Mais e Plano Fale Mais 120', function() {
    // Origem: 018  Destino: 011  Tempo: 200  Plano: FaleMais120  ComFaleMais: $167,20  SemFaleMais: $380,00
    component.calculo.codOrigem = "18";
    component.calculo.codDestino = "11";
    component.calculo.tempoLigacao = 200;
    component.calculo.plano = "120"; 

    component.calculoFinal();
    fixture.detectChanges();
    expect(component.precoPlano).toEqual(167.20);
    expect(component.precoNormal).toEqual(380);
  });

  it('O resultado deve ser $0,00 Sem Fale Mais, $0,00 Com Fale Mais e Plano Fale Mais 30', function() {
    // Origem: 018  Destino: 017  Tempo: 100  Plano: FaleMais30  ComFaleMais: $0,00  SemFaleMais: $0,00
    component.calculo.codOrigem = "18";
    component.calculo.codDestino = "17";
    component.calculo.tempoLigacao = 100;
    component.calculo.plano = "30"; 

    component.calculoFinal();
    fixture.detectChanges();
    expect(component.precoPlano).toEqual(0);
    expect(component.precoNormal).toEqual(0);
  });

});
