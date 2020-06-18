import { Injectable } from '@angular/core';


import { Establecimiento } from '../Modelos/establecimiento';


//**********************MODELOS */

import {Cadena} from '../Modelos/cadena';

//*******************SERVICIOS */

import	{DBService} from '../Servicios/db.service'


@Injectable({
  providedIn: 'root'
})
export class CookiesService {


  public _listaCadena : Array<Cadena> = []

  public _establecimientoActual : Establecimiento;

  _establecimientoNombre : string ="";

  constructor() {

  }


//*******************************GUARDAR OBJETO CADENA COMO STORAGE */

  GuardarListaCadena(obj: Array<Cadena>){

    this._listaCadena = obj;
  }

  ObtenerCadena(){

    return this._listaCadena;

  }

//************************************************************** */



GetNombreEstablecimiento(){

      return localStorage.getItem("EstablecimientoName");

}


GetEstablecimiento(){

  let aux = this.GetNombreEstablecimiento();

  if(aux != null)
  {
    return aux;

  }else{

    return this._establecimientoNombre;
  }


}



GetObjetcEstablecimiento(){


  this._establecimientoActual = JSON.parse(localStorage.getItem("Establecimiento"));

  return this._establecimientoActual;
}






  GuardarEstablecimiento(obj: Establecimiento){

    this._establecimientoActual = obj;

    localStorage.setItem("EstablecimientoName", JSON.stringify(obj.razon));

    localStorage.setItem("Establecimiento", JSON.stringify(obj));

  }



  BorrarCookies(){

    localStorage.removeItem("EstablecimientoName");
    localStorage.removeItem("Establecimiento");

  }




///*****************************************GENERAR OBJETO DETALLE */




GenerarObjDetalle(obj: Cadena){

  localStorage.setItem("Detalle", JSON.stringify(obj));

}


//*********************************************TRAER OBJETO DETALLE */


ObtenerObjetoDetalle(){

  return JSON.parse(localStorage.getItem("Detalle"));

}



GenerarObjDetallePorId(obj: string){

  localStorage.setItem("Detalle", JSON.stringify(obj));

}





}
