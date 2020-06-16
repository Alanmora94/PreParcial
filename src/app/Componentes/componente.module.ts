import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//**********FORMULARIO */
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {LogInLComponent} from './Formularios/log-in-l/log-in-l.component'


import { ComponenteRoutingModule } from './componente-routing.module';


//**************MATERIAL */

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { LogUpLComponent } from './Formularios/log-up-l/log-up-l.component';


//**************SERVICIOS */



@NgModule({
  declarations: [LogInLComponent, LogUpLComponent],
  imports: [
    CommonModule,
    ComponenteRoutingModule,

    //******FORMULARIOS */
    FormsModule,
    ReactiveFormsModule,


    //*****MATERIAL */
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSelectModule



  ],

  providers: [],

  exports: [LogInLComponent,LogUpLComponent]
})
export class ComponenteModule { }
