import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { TableroComponent } from './tablero/tablero.component';
import { CasillasComponent } from './casillas/casillas.component';
import { FilasComponent } from './filas/filas.component';
import { CeldasComponent } from './celdas/celdas.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TableroComponent,
    CasillasComponent,
    FilasComponent,
    CeldasComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
