import { AfterViewInit, Component, EventEmitter, Input, Output, QueryList, ViewChildren } from '@angular/core';
import { FilasComponent } from '../filas/filas.component';
import { estadoJuego } from 'src/app/model/tipo';

@Component({
  selector: 'app-casillas',
  templateUrl: './casillas.component.html',
  styleUrls: ['./casillas.component.sass']
})
export class CasillasComponent implements AfterViewInit {
  @Input() lapalabra!: string
  @Input() lasletras!: any[]

  @Output() MesajeEstado = new EventEmitter<estadoJuego>();

  @ViewChildren(FilasComponent) Viewfilas !: QueryList<FilasComponent>;


  filas = [1, 2, 3, 4, 5, 6]
  filaActiva = 1

  ngAfterViewInit(): void {
    setTimeout(() => {
      const fila = this.Viewfilas.first
      if (fila) {
        fila.cambiarEstadoFila()
      }
    })
  }

  Verificar() {

    const filaActual = this.Viewfilas.find(f => f.identificador == this.filaActiva);

    if (!filaActual) return //si no exite la filaActual, no continua con la ejecución, evita errores

    let response = filaActual.verificar()

    if (response === "ganador" || response === "perdedor") {
      this.MesajeEstado.emit(response)
      filaActual.cambiarEstadoFila();
      return
    }else if (response === "espaciosVacios") {
      this.MesajeEstado.emit(response)
      return
    }

    this.MesajeEstado.emit(response)
    filaActual.cambiarEstadoFila();

    const filaPosterior = this.Viewfilas.find(f => f.identificador == this.filaActiva + 1);
    if (!filaPosterior) return

    filaPosterior.cambiarEstadoFila();
    setTimeout(()=> {
      filaPosterior.focusPrimerCelda();
    });

    this.filaActiva++;


  }
}
