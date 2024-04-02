import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.sass']
})
export class TableroComponent implements OnInit {
  palabra!: string
  palabras = [
    'romeo',
    'carro',
    'ramon',
    'roman',
    'remix',
    'ramos'
  ]
  letras: any = []
  constructor() { } 
  ngOnInit(): void {
    const random = Math.floor(Math.random() * this.palabras.length);
    console.log(this.palabras[random]);
    this.palabra = this.palabras[random];
    this.letras = this.palabras[random].split('');
    console.log(this.letras);
  }



}
