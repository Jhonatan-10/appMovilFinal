import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page { 
  monto = 0;
  IVA = 0;
  ITE = 0;
  utilidades = 0;
  p1=13;
  p2=3;
  p3=100;
  
  constructor() {}

  calcularImpuesto() {

  this.IVA = (this.monto * this.p1)/this.p3;
  this.ITE = (this.monto * this.p2)/this.p3;
  this.utilidades = this.monto - (this.IVA + this.ITE);
  
  }

}
