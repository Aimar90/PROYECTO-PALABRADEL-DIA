import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-celdas',
  templateUrl: './celdas.component.html',
  styleUrls: ['./celdas.component.sass']
})
export class CeldasComponent {
  @Input() palabra!: string
  @Input() letras!: string
  opcion: string = ''
  css: string = ''
  verificar() {
    
    if (this.opcion === this.letras) {
      this.css='correcto'
    }else if (this.palabra.includes(this.opcion)) {
      this.css='presente'
    }else {
      this.css='abstenido'
    }
  }
    
}
