import { Component, OnInit } from '@angular/core';

import {Cadena} from '../../../Modelos/cadena'

import {DBService} from '../../../Servicios/db.service';

@Component({
  selector: 'app-codigo-qr',
  templateUrl: './codigo-qr.component.html',
  styleUrls: ['./codigo-qr.component.css']
})
export class CodigoQRComponent implements OnInit {

  cadena: Cadena;
  _lista: Array<Cadena>=[];


  constructor(private base: DBService) {


    this.base.GetCadena().subscribe(datos=>{

      this._lista=datos;

      this.cadena = this._lista[0];
    })

  }



  ConvertirAString(){

    //let objeto: Cadena = this._lista[0];

    let cadena: string = this.cadena.razon + " - " + this.cadena.direccion + " - " + this.cadena.marca + " - " + this.cadena.modelo + " - " + this.cadena.tipo;

    return cadena;
  }



  ngOnInit(): void {
  }

}
