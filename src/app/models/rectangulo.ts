import { IRectangulo } from "./irectangulo";

export class Rectangulo implements IRectangulo{
    base:number;
    altura:number;
    constructor(base:number, altura:number){
        this.base = base;
        this.altura = altura;
    }
    area = (base:number,altura:number):number =>  this.base * this.altura;
}