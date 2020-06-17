import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import	{ Establecimiento } from '../../../Modelos/establecimiento';


@Component({
  selector: 'app-select-de-establecimientos',
  templateUrl: './select-de-establecimientos.component.html',
  styleUrls: ['./select-de-establecimientos.component.css']
})
export class SelectDeEstablecimientosComponent implements OnInit {


  @Output() Elegido = new EventEmitter<any>();

  _elegido : Establecimiento;
  _lista : Array<any> = [];

  _mostrar= false;

  @Input()
  public set Lista (obj : Array<Establecimiento>){

    this._lista = obj;


  }


  constructor() {


    console.log("construct ", this._lista);
    this._mostrar = true;



   }

  ngOnInit(): void {

    console.log(this._lista);
  }









  elegir(obj: Establecimiento){

    this.Elegido.emit(obj);

  }


}
