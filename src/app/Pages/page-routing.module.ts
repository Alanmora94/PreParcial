import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//*************COMPONENTES */

import { DetalleComponent } from './detalle/detalle.component';

import { MenuComponent } from './menu/menu.component';
import { LogUpComponent } from './log-up/log-up.component';
import { LogInComponent } from './log-in/log-in.component';
import {HomeComponent} from './home/home.component';

import {EstablecimientoComponent} from '../Pages/establecimiento/establecimiento.component';
import {VehiculoComponent} from '../Pages/vehiculo/vehiculo.component';

import {GrillaAvanzadaComponent} from '../Pages/grilla-avanzada/grilla-avanzada.component'


//**************GUARDS */

import {AutenticacionGuard} from '../Guards/autenticacion.guard';

//import { AuthGuard } from '../Guards/auth.guard'

const routes: Routes = [

  {path: "", component: MenuComponent,
  children: [
    {path: "LogIn",
     component: LogInComponent},
     {path: "Detalle",
     component: DetalleComponent},
     {path: "LogUp",
     component: LogUpComponent},
     {path: "Grilla",
     component: GrillaAvanzadaComponent},
     {path: "Establecimiento",
     component: EstablecimientoComponent},
     {path: "Vehiculo",
     component: VehiculoComponent,
     canActivate: [AutenticacionGuard]},

     {path: "Home",
     component: HomeComponent,
     canActivate: [AutenticacionGuard]}
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
