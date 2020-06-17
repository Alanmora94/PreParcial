import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//**********FORMULARIO */
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {LogInLComponent} from './Formularios/log-in-l/log-in-l.component'
import { BotonLogOutComponent } from './Formularios/boton-log-out/boton-log-out.component';
import { LogUpLComponent } from './Formularios/log-up-l/log-up-l.component';
import {EstablecimientoLComponent} from '../Componentes/Formularios/establecimiento-l/establecimiento-l.component'


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



//**************SERVICIOS */

import {SesionService} from '../Servicios/sesion.service';
import {TokService} from '../Servicios/tok.service';
import { AltaVehiculoComponent } from './Formularios/alta-vehiculo/alta-vehiculo.component';
import { SelectDeEstablecimientosComponent } from './Basicos/select-de-establecimientos/select-de-establecimientos.component';
import { EstablecimientoActualComponent } from './Basicos/establecimiento-actual/establecimiento-actual.component';
import { TodoComponent } from './Grillas/Vehiculo/todo/todo.component';
import { ExportComponent } from './Grillas/Vehiculo/export/export.component';




//*********************************SMART TABLE */

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AnioComponent } from './Grillas/Vehiculo/Validadores/anio/anio.component';
import { MarcaComponent } from './Grillas/Vehiculo/Validadores/marca/marca.component';
import { ModeloComponent } from './Grillas/Vehiculo/Validadores/modelo/modelo.component';
import { TipoComponent } from './Grillas/Vehiculo/Validadores/tipo/tipo.component';
import { ImagenComponent } from './Grillas/Vehiculo/Validadores/imagen/imagen.component';
import { KilometrosComponent } from './Grillas/Vehiculo/Validadores/kilometros/kilometros.component';
import { DatoCargadoComponent } from './Grillas/dato-cargado/dato-cargado.component';
import { ImgEditorComponent } from './Grillas/Vehiculo/Validadores/img-editor/img-editor.component';







@NgModule({
  declarations: [LogInLComponent, LogUpLComponent, BotonLogOutComponent,
  EstablecimientoLComponent, AltaVehiculoComponent, SelectDeEstablecimientosComponent, EstablecimientoActualComponent, TodoComponent, ExportComponent, AnioComponent, MarcaComponent, ModeloComponent, TipoComponent, ImagenComponent, KilometrosComponent, DatoCargadoComponent, ImgEditorComponent],
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
    MatSelectModule,

    //*****SMART */

    Ng2SmartTableModule

  ],

  providers: [SesionService,TokService],

  exports: [LogInLComponent,LogUpLComponent,BotonLogOutComponent,EstablecimientoLComponent,AltaVehiculoComponent,EstablecimientoActualComponent]
})
export class ComponenteModule { }
