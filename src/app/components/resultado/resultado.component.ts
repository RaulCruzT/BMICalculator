import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit {
  bmi: number;
  resultado: string;
  interpretacion: string;

  constructor(private route: ActivatedRoute) {
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado() {
    if(this.bmi >= 40){
      this.resultado='Obesidad clase 3';
      this.interpretacion='Se recomienda acudir a un nutricionista'
    }else if(this.bmi >= 35){
      this.resultado='Obesidad clase 2';
      this.interpretacion='Se recomienda acudir a un nutricionista'
    }else if(this.bmi >= 30){
      this.resultado='Obesidad clase 1';
      this.interpretacion='Debes cuidar tu alimentación y hacer ejercicio'
    }else if(this.bmi >= 25){
      this.resultado='Sobrepeso';
      this.interpretacion='Comienza a cuidar tu alimentación'
    }else if(this.bmi>= 18.5){
      this.resultado='Peso normal';
      this.interpretacion='Estás bien. Sigue así!'
    } else{
      this.resultado='Bajo peso';
      this.interpretacion='Debes comer un poco más'
    }
  }

}
