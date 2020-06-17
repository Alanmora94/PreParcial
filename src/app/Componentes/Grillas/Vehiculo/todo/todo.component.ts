import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';



//*************************COMPONENTES */


import {ImagenComponent} from '../Validadores/imagen/imagen.component';
import {ImgEditorComponent} from '../Validadores/img-editor/img-editor.component';

import {DatoCargadoComponent} from '../../dato-cargado/dato-cargado.component'

import {ModeloComponent} from '../Validadores/modelo/modelo.component'
import {MarcaComponent} from '../Validadores/marca/marca.component'


//*******************CLASE */

import {CadenaClass} from '../../../../Modelos/cadena-class'


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  //_pacienteEditado : Paciente;

  _cadena: Array<CadenaClass>;

  //result;




  @Input()
  public set Paciente (obj : Array<CadenaClass>){

    this._cadena = obj;


  }


  @Output() deleteOne = new EventEmitter<any>();

  @Output() PacienteEditado = new EventEmitter<any>();


  constructor() { }

  ngOnInit(): void {
  }






  deleteone(e){


  }


  Edicion(e){

  }





  settings = {

    delete: {
      confirmDelete : true
    },
    edit: {
      confirmSave: false

    },

    actions: {
      add: false,
      edit: false
    },
    columns: {

      marca: {
        title: 'marca',
        filter: true,
        editor: {
          type: 'custom',
          component: MarcaComponent
        },
        type: 'custom',
        renderComponent: DatoCargadoComponent

      },
      modelo: {
        title: 'modelo',
        editor: {
          type: 'custom',
          component: ModeloComponent
        },
        type: 'custom',
        renderComponent: DatoCargadoComponent
      },
      tipo: {
        title: 'tipo',
        type: 'custom',
        renderComponent: DatoCargadoComponent
      },
      imagen: {
        title: 'Imagen',
        filter: false,
        sort: false,
        editor: {
          type: 'custom',
          component: ImgEditorComponent
        },
        type: 'custom',
        renderComponent: ImagenComponent
      }
    }
  };







}
