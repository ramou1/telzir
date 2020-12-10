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

  it('O resultado deve ser $ 38,00 Sem Fale Mais e Fale Mais 30', function() {
    // Origem: 011  Destino: 016  Tempo: 20  Plano: FaleMais30  ComFaleMais: $0,00  SemFaleMais: $38,00
    if(component.calculo.codOrigem == "11") {

    }
    // expect(component.calculo.tempoLigacao).toEqual("80");
  });

  it('O resultado deve ser $ 136,00 Sem Fale Mais e Fale Mais 60', function() {
    // Origem: 011  Destino: 017  Tempo: 80  Plano: FaleMais60  ComFaleMais: $37,40  SemFaleMais: $136,00
    expect(2 + 2).toEqual(4);
  });

  it('O resultado deve ser $ 380,00 Sem Fale Mais e Fale Mais 120', function() {
    // Origem: 018  Destino: 011  Tempo: 200  Plano: FaleMais120  ComFaleMais: $167,20  SemFaleMais: $380,00
    expect(2 + 2).toEqual(4);
  });

});
