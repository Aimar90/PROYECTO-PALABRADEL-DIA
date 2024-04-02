import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filas',
  templateUrl: './filas.component.html',
  styleUrls: ['./filas.component.sass']
})
export class FilasComponent {
  @Input() palabra!: string
  @Input() letra!: any[]
  celdas = [1,2,3,4,5]

  opcion: any[] = [];
  css: string = '';

  verificar() {
    if (this.opcion.length === this.letra.length) {
      console.log('lleno')
    } else {
      console.log('falta llenar')
    }
    console.log(this.opcion.length)
    console.log(this.letra.length)
  }
}
