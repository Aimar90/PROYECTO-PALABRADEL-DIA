import { Expansion } from "@angular/compiler";
import { ColorCelda, dificultadJuego } from "./tipo";

export interface celdaModel{
    id: number;
    text: string;
    css?: ColorCelda
}

export interface palabraModel {
    id: number;
    palabra: string;
    tamanio: string;
    dificultad: dificultadJuego;
}