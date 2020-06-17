import { Component, OnInit } from '@angular/core';

import {DBService} from '../../../../Servicios/db.service';

import {Cadena} from '../../../../Modelos/cadena'


//******************************************************************** */

@Component({
  selector: 'app-export',
  templateUrl: './export.component.html',
  styleUrls: ['./export.component.css']
})
export class ExportComponent implements OnInit {


  displayedColumns: string[] = ['marca','modelo','tipo','razon'];


  _listado:Array<Cadena>;


  constructor(private base : DBService) {

    this.base.GetCadena().subscribe(datos=>{

        this._listado = datos;



    })

  }


  ngOnInit(): void {
  }





}

