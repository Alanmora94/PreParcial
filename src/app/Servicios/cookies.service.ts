import { Injectable } from '@angular/core';

import { DBService} from './db.service';

import { Establecimiento } from '../Modelos/establecimiento';


@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  public _establecimientoActual : Establecimiento;

  _establecimientoNombre : string ="";

  constructor(private db : DBService) {




  }





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



}
