import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../models/heroe';
import { IRectangulo } from '../../models/irectangulo';

@Component({
  selector: 'app-ejercicio-dos',
  templateUrl: './ejercicio-dos.component.html',
  styleUrls: ['./ejercicio-dos.component.css']
})
export class EjercicioDosComponent implements OnInit {
  public panelOpenState:boolean;
  public preguntas=[{
    title:"2.1",
    pregunta:"Uso de Let y Const, ¿Harías cambios en las siguientes líneas? ¿Y por qué?",
    description: "var nombre = \"Ricardo Tapia\";\nvar edad = 23;\nvar PERSONAJE = {\nnombre: nombre,\nedad: edad\n};",
    id:"element21",
    codeSnippe:"let nombre = 'Ricardo Tapia';\nlet edad = 23;\nvar PERSONAJE = {nombre: nombre,edad: edad};\nconsole.log(PERSONAJE);",
    respuesta: "El cambio lo haría en las variables, ya que solo se usaran para construir el objeto PERSONAJE"
  },{
    title:"2.2",
    pregunta:"Cree una interfaz que sirva para validar el siguiente objeto",
    description: "\"var batman = {\nnombre: \"Bruno Díaz\",\n"+
    "artesMarciales: \['Karate','Aikido','Wing Chun','Jiu-Jitsu'\]\n}",
    id:"element22",
    codeSnippe:"/*export interface ArtesMarciales {\n nombre:string;\n}\n\nimport { ArtesMarciales } from './artes-marciales';\nexport interface Heroe {\n"+
    "nombre:string;\nartesMarciales:Array<ArtesMarciales>;\n}*/",
    respuesta:""
  },{
    title:"2.3",
    pregunta:"Convertir esta función a una función de flecha",
    description:"function resultadoDoble( a, b ){\nreturn (a + b) * 2\n}",
    id:"element23",
    codeSnippe:"let resultadoDoble = ( a, b )=> (a + b) * 2;\nresultadoDoble(3,4);",
    respuesta:""
  },{
    title:"2.4",
    pregunta:"Función con parámetros obligatorios, opcionales y por defecto",
    description:"// donde NOMBRE = obligatorio\n//       PODER  = opcional\n//       ARMA   = por defecto = 'arco'\n"+
    "function getAvenger( nombre, poder, arma ){\nvar mensaje;\nif( poder ){\nmensaje = nombre + ' tiene el poder de: "+
    "' + poder + ' y un arma: ' + arma;\n}else{\nmensaje = nombre + ' tiene un ' + poder\n}\n};",
    id:"element24",
    codeSnippe:"/*let getAvenger=( nombre:string, poder?:string, arma='arco' )=>(poder ? nombre + ' tiene el poder de: '"+
    " + poder + ' y un arma: ' + arma:nombre + ' tiene un ' + poder);\ngetAvenger('Fran','angular','programar')*/",
    respuesta:""
  },{
    title:"2.5",
    pregunta:"Cree una clase que permita manejar la siguiente estructura",
    description:"La clase se debe de llamar rectángulo, debe de tener dos propiedades:\n* base\n* altura\n"+
    "También un método que calcule el área  =  base * altura",
    id:"element25",
    codeSnippe:"/*interface IRectangulo {\nbase:number;\naltura:number;\narea:(base:number,altura:number)=>number;\n"+
    "class Rectangulo{\nbase:number;\naltura:number;\nconstructor(base:number, altura:number){\n"+
    "this.base = base;\nthis.altura = altura;\n}\narea = (base:number,altura:number):number =>  this.base * this.altura;\n}*/",
    respuesta:""
  }];
  public heroes:Array<Heroe>;
  public rectangulo:IRectangulo;

  constructor() {
    this.panelOpenState = false
    this.heroes=[];
    this.heroes.push({
      key:1, 
      nombre:"Bruno Díaz",
      artesMarciales:[
        {key:1, nombre:"Karate"},
        {key:1, nombre:"Aikido"},
        {key:1, nombre:"Wing Chun"},
        {key:1, nombre:"Jiu-Jitsu"}
      ]
    });
    // this.rectangulo;
    this.rectangulo = {
      base:2,
      altura:3,
      area:Number
    }
    
    };

  ngOnInit(): void {
    console.log(this.heroes);
    console.log(this.resultadoDoble(2,3));
    console.log(this.getAvenger("Fran"));
    console.log("El área del rectángulo es "+this.rectangulo.area(this.rectangulo.base,this.rectangulo.altura));
  }

  resultadoDoble = ( a:number, b:number ) => (a + b) * 2;

  getAvenger=( nombre:string, poder?:string, arma="arco" )=>(poder ? nombre + " tiene el poder de: " + poder + " y un arma: " + arma:nombre + " tiene un " + poder);

}
