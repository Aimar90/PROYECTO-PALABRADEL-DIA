import { Component, ElementRef, EventEmitter, Input, Output, ViewChild, numberAttribute } from '@angular/core';
import { celdaModel } from 'src/app/model/intecambio.interface';
import { ColorCelda } from 'src/app/model/tipo';

@Component({
  selector: 'app-celdas',
  templateUrl: './celdas.component.html',
  styleUrls: ['./celdas.component.sass']
})
export class CeldasComponent {
  // @Input() palabra!: string
  // @Input() letras!: string
  
  @Output() caracterCelda = new EventEmitter<celdaModel>();

  @Input({required: true, transform: numberAttribute}) id!: number;
  text: string = "";
  @Input({required: true}) activarInput!: boolean

  @ViewChild("inputCelda") inputCelda!: ElementRef;


  opcion: string = ''
  @Input() css?: ColorCelda= 'normal'

  // verificar() {
    
  //   // if (this.opcion === this.letras) {
  //   //   this.css='correcto'
  //   // }else if (this.palabra.includes(this.opcion)) {
  //   //   this.css='presente'
  //   // }else {
  //   //   this.css='abstenido'
  //   // }

  // }

  enviarCaracter(){
    // if(this.text.trim()){
      if(this.text.length === 1 || this.text.length === 0) {
        this.caracterCelda.emit({
          id: this.id,
          text: this.text.trim().toUpperCase()
        })
      } else{
        console.error("NO FUNCIONA COMO SE DECEA LA CELDA")
      }
    // }
  }


  allowOnlyLetters(event: KeyboardEvent): void { /// la IA me ayudo, simplemente no te permite escribir numeros, ni caracteres especiales
    const inputChar = event.key;
    if (!/^[a-zA-Z]*$/.test(inputChar)) {
      event.preventDefault();
    }
  }

  handlePaste(event: ClipboardEvent): void { /// la IA me ayudo, lo mismo que lo anterior pero cuando lo copias y pegas en el input
    const pastedInput: string = (event.clipboardData?.getData('text/plain') || '');
    if (!/^[a-zA-Z]*$/.test(pastedInput)) {
      event.preventDefault();
    }
  }

  focusInput(){
    setTimeout(() =>{
      this.inputCelda.nativeElement.focus();
    })
  }
    
}
