import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public itemMenu=[{
    ruta:"/ejercioA",
    titulo:"Ejercio 1"
  },{
    ruta:"/ejercioB",
    titulo: "Ejercio 2"
  }];
  constructor(private roter:Router) {}

  ngOnInit(): void {
  }

}
