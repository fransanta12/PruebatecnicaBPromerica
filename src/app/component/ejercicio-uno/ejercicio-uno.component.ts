import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
@Component({
  selector: 'app-ejercicio-uno',
  templateUrl: './ejercicio-uno.component.html',
  styleUrls: ['./ejercicio-uno.component.css']
})
export class EjercicioUnoComponent implements OnInit {
  public valorA:number=0;
  public valorB:number=0;
  public resultado:number;
  public panelOpenState:boolean;

  constructor() { 
    this.resultado = 0;
    this.valorA = 0;
    this.valorB = 0
    this.panelOpenState = false
  }

  ngOnInit(): void {
  }

  public SumaRecursiva(a:number,b:number,c:number=0):number{
    console.log("a: "+ a);
    console.log("b: "+ b);
    if(b == 0){
      return this.resultado = 0;
    }
    if (b == 1) {
      return this.resultado = c + a;
    } else {
      return this.SumaRecursiva(a,b-1,c + a);
    }
  }

}
