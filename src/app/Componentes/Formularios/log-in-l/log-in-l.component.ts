import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../Modelos/usuario';
//import { LoginService } from '../../../servicios/sesion/login.service';
import { FormControl, FormBuilder ,FormGroup, Validators } from '@angular/forms';

import {SesionService} from '../../../Servicios/sesion.service';


import {Establecimiento} from '../../../Modelos/establecimiento';


import {DBService} from '../../../Servicios/db.service';


import {CookiesService} from '../../../Servicios/cookies.service';


@Component({
  selector: 'app-log-in-l',
  templateUrl: './log-in-l.component.html',
  styleUrls: ['./log-in-l.component.css']
})
export class LogInLComponent implements OnInit {

  formulario: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  _elegido: Establecimiento;
  _establecimientos : Array<Establecimiento>;

  _email : string;
  _pass : string;

  constructor(private cookies: CookiesService, private base: DBService, private sesion: SesionService , private frmbuilder: FormBuilder) {


    this.formulario = this.frmbuilder.group( {

      pass: ['', [Validators.required]],
     email: ['', [Validators.required, Validators.pattern(this.emailPattern)]]});


      this.CargarEstablecimientos();

   }

   get pass() { return this.formulario.get('pass'); }
   get email() { return this.formulario.get('email'); }


  IniciarS(){

    if(this.formulario.valid){

     this.sesion.IniciarSesion(new Usuario(this._email,this._pass));
    }


    this.cookies.GuardarEstablecimiento(this._elegido);


  }

  ngOnInit(): void {
  }





//*********************************CARGAR LOS ESTABLECIMIENTOS */


CargarEstablecimientos(){

  this.base.GetEstablecimientos().subscribe(datos => {
    this._establecimientos = datos;
  });

}



recibir(e){

 //this.cookies.GuardarEstablecimiento(e);

this._elegido = e;
}



}
