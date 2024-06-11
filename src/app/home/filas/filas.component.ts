import { AfterViewInit, Component, Input, QueryList, ViewChildren, numberAttribute } from '@angular/core';
import { celdaModel } from 'src/app/model/intecambio.interface';
import { CeldasComponent } from '../celdas/celdas.component';
import { estadoJuego } from 'src/app/model/tipo';
import { filter } from 'rxjs';

@Component({
  selector: 'app-filas',
  templateUrl: './filas.component.html',
  styleUrls: ['./filas.component.sass']
})
export class FilasComponent implements AfterViewInit {
  @Input({required:true}) palabra: string = ""
  @Input() letras!: any[]
  @Input({required:true,transform: numberAttribute}) identificador!:number 
  
  @ViewChildren(CeldasComponent) ViewCelda!: QueryList<CeldasComponent>
  
  filaActiva: boolean = false
  celdas: celdaModel[] = [] //this.rellenarI(5)
  charsSalienteCelda:celdaModel[] = [];
  css: string = '';

  constructor(){
    this.celdas = this.rellenarI(this.palabra.length)
  }

  ngAfterViewInit(): void {
    if(this.identificador === 1){
      this.focusPrimerCelda();
    }
  }


  verificar():estadoJuego{

    let palabraDeCelda = this.charsSalienteCelda.sort((a,b) => a.id - b.id ).filter(elm => elm.text !== "" )
    let palabraCelda = palabraDeCelda.map(caracter => caracter.text).join("")

    if (palabraDeCelda.length === this.palabra.length) {

      let arrCopi = [...this.letras];

      palabraDeCelda.forEach((elm, i) =>{
        if (elm.text === this.letras[i]) {
          this.celdas[i].css = "correcto"
          arrCopi[i] = ""
        }
      })

      if(palabraCelda === this.palabra) return "ganador"

      palabraDeCelda.forEach((elm, i) =>{
        if(this.palabra.includes(elm.text) && arrCopi.includes(elm.text) && !(elm.text === this.letras[i])){
          this.celdas[i].css = "presente"
          // arrCopi.shift()
        }else if(!(elm.text === this.letras[i])){
          this.celdas[i].css = 'abstenido'
        }
      }) 
      if( this.identificador === 6 ) return "perdedor"
      
      return "oportunidad"
    } 

    return "espaciosVacios"
  }

  CaracterCelda(OutCelda: celdaModel){

    const index = this.charsSalienteCelda.findIndex(elm => elm.id === OutCelda.id)  
    
    if(index === -1) this.charsSalienteCelda.push(OutCelda);
    else this.charsSalienteCelda[index].text = OutCelda.text;


    if(OutCelda.text !== ''){
      setTimeout( () =>{
        let i = OutCelda.id
        if (i !== this.palabra.length - 1 ) {
          this.ViewCelda.toArray()[i + 1].focusInput();
        }
      })
    }
    
  }

  cambiarEstadoFila(){
    this.filaActiva = !this.filaActiva
  }

  rellenarI(size:number){
    let arr:celdaModel[] = []
    if (size === 0) size = 5 
 
    for(let i = 0; i < size; i++){
      arr.push({
        id: i,
        text: '',
        css: 'normal'
      })
    }
    return arr
  }

  focusPrimerCelda(){
    setTimeout(() =>{     
      this.ViewCelda.first.focusInput();     
    })
  }




}
