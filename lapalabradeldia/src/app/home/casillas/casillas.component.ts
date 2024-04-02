import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-casillas',
  templateUrl: './casillas.component.html',
  styleUrls: ['./casillas.component.sass']
})
export class CasillasComponent {
  @Input() lapalabra!: string
  @Input() lasletras!: any[]
  filas = [1,2,3,4,5,6]
}
