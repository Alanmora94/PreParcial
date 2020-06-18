import { Component, OnInit , Input} from '@angular/core';

//**************SERVICIOS */

import {DBService} from '../../../../../Servicios/db.service';

import {CookiesService} from '../../../../../Servicios/cookies.service';

import {GenerarObjDetalleService} from '../../../../../Servicios/Detalle/generar-obj-detalle.service';

//**************MODELOS */

import {Cadena} from '../../../../../Modelos/cadena';


@Component({
  selector: 'app-boton-detalle',
  templateUrl: './boton-detalle.component.html',
  styleUrls: ['./boton-detalle.component.css']
})
export class BotonDetalleComponent implements OnInit {

  @Input() value: string;

  _lista: Array<Cadena>;


  constructor(public cookies:CookiesService,  private detalle: GenerarObjDetalleService) {


  }

  ngOnInit(): void {
  }

  Detalle(){

    console.log(this.value);

    this._lista = this.cookies.ObtenerCadena();

    console.log(this._lista);
  //  this.detalle.GenerarCookieCadenaPorId(this._lista,this.value);

  }


}
