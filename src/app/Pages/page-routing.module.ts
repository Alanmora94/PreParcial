import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


//*************COMPONENTES */

import { MenuComponent } from './menu/menu.component';
import { LogUpComponent } from './log-up/log-up.component';
import { LogInComponent } from './log-in/log-in.component';
import {HomeComponent} from './home/home.component';

//**************GUARDS */

//import { AuthGuard } from '../Guards/auth.guard'

const routes: Routes = [

  {path: "", component: MenuComponent,
  children: [
    {path: "LogIn",
     component: LogInComponent},
     {path: "LogUp",
     component: LogUpComponent},
     {path: "Home",
     component: HomeComponent}
    ]
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
