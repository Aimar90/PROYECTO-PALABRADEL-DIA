import { Component, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';
import { CasillasComponent } from '../casillas/casillas.component';
import { estadoJuego } from 'src/app/model/tipo';
import { PalabraService } from 'src/app/services/palabra.service';
import { Observable } from 'rxjs';
import { palabraModel } from 'src/app/model/intecambio.interface';

@Component({
  selector: 'app-tablero',
  templateUrl: './tablero.component.html',
  styleUrls: ['./tablero.component.sass']
})
export class TableroComponent implements OnInit {

  @ViewChild(CasillasComponent) casillas!: CasillasComponent

  mesajes = ""
  estiloMsj = ""

  deshabilitarInput = false;

  palabra!: string
  palabras: string[] = []
  letras: string[] = []

  palabras$ !: Observable<palabraModel[]>
  constructor(private servicio: PalabraService) { }

  ngOnInit(): void {

    this.palabras$ = this.servicio.getPalabras()

    this.palabras$.subscribe(palabrasServ => {

      this.palabras = palabrasServ.filter(elm => elm.dificultad === "dificil").map(elm => elm.palabra)
      
      const random = Math.floor(Math.random() * this.palabras.length);
      console.log(this.palabras[random]);
      this.palabra = this.palabras[random].toUpperCase();
      this.letras = this.palabras[random].toUpperCase().split('');
      console.log(this.letras);

    })

  }

  onClick() {
    this.casillas.Verificar()
  }

  mensajesEntrantes(msj: estadoJuego) {
    switch (msj) {
      case 'ganador': this.mesajes = "¡GANASTE! Felicidades"
        this.estiloMsj = "msjGanador"
        this.deshabilitarInput = true;
        break;
      case 'perdedor': this.mesajes = "te quedaste sin oportudidades, Haz perdido :("
        this.estiloMsj = "msjPerdedor"
        this.deshabilitarInput = true;
        break;
      case 'oportunidad':
        this.mesajes = ""
        break
      case 'espaciosVacios': this.mesajes = "tienes casillas por rellenar"
        this.estiloMsj = "msjVacios"
    }
  }


}
