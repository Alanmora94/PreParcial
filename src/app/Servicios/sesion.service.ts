import { Injectable } from '@angular/core';
import { Usuario } from '../Modelos/usuario';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from "@angular/router";
import {TokService} from './tok.service'




@Injectable({
  providedIn: 'root'
})
export class SesionService {


  paquete: JSON;
  UserName: string ="";
  sesion: boolean=false;


  constructor(public auth: AngularFireAuth, private token: TokService, private ruta: Router) { }

  objeto: any;

  CargarUser(obj: Usuario){

    console.log("entra");
    console.log(obj.email);
    console.log(obj.password);

    this.auth.createUserWithEmailAndPassword(obj.email,obj.password)
    .then(data => {


      data.user.updateProfile({
        displayName: obj.nombre
      }).then(() => {
        data.user.getIdToken().then(token=>{
          this.UserName = obj.nombre;
          this.GuardaruserName(this.UserName);


          this.token.GuardarToken(token);
          this.sesion = true;
          //this.notificacion.LogUp(this.UserName);
          this.ruta.navigateByUrl("Home");
        }
        )
        .catch(e=>{
          //console.log("error al conseguir el token");
        });

      }).catch(e=>{
        //console.log("Error al actualizar el display" + e);

      });



    })
    .catch(e =>{
      //console.log(e);
    })

  }





  IniciarSesion(obj: Usuario){


    try {


    this.auth.signInWithEmailAndPassword(obj.email,obj.password)
    .then(data => {

          this.UserName = data.user.displayName;
          this.GuardaruserName(this.UserName);


      data.user.getIdToken().then(token=>{



          this.token.GuardarToken(token);

          if(this.token.ValidarToken()){
            //this.notificacion.LogIn(this.GetUsername());

            this.sesion = true;
            this.ruta.navigateByUrl("Home");}


        }
        )
        .catch(e=>{
          //console.log("error al conseguir el token");
        });

      }).catch(e=>{


        console.log("error de login");
        //this.notificacion.ErrorLogin();

      });

    } catch (error) {

      console.log("error de login2");
        //console.log("error de login");
    }



}






GuardaruserName(obj: string){
  localStorage.setItem("UserName", obj);
}



LogOut(){

  try {

    localStorage.removeItem("UserName")

    this.UserName = '';

    this.token.BorrarToken();

    this.sesion = false;

    this.ruta.navigateByUrl("LogIn");

    //this.notificacion.LogOut(this.GetUsername());
    //localStorage.removeItem("idDetalle")

  } catch (error) {

    //console.log(error);
  }

}
















}
