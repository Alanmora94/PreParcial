import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageModule } from './Pages/page.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponenteModule } from './Componentes/componente.module';

//**************FIREBASE */

import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment';



import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';



//**************JWT */
import { JwtModule } from "@auth0/angular-jwt";
import { HttpClientModule } from "@angular/common/http";


//import {LoginService} from './Servicios/sesion/login.service';
//import {TokenService} from './Servicios/sesion/token.service';



export function tokenGetter() {
  return localStorage.getItem("token");
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter
        }
    }),

    ComponenteModule,
    PageModule,
    BrowserAnimationsModule,


    AppRoutingModule,
  ],
  providers: [],//LoginService,TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
