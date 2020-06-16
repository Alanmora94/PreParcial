import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';


import { IEstablecimiento } from '../Modelos/iestablecimiento';
import { Establecimiento } from '../Modelos/establecimiento';

import {Ifile} from '../Modelos/ifile';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';




@Injectable({
  providedIn: 'root'
})
export class DBService {


//////////////// ESTABLECIMIENTO

  EstablecimientoCollection: AngularFirestoreCollection<IEstablecimiento>;
  Establecimiento: Observable<IEstablecimiento[]>;
  EstablecimientoDoc: AngularFirestoreDocument<IEstablecimiento>;


//////////////// AUTOS

  AutoCollection: AngularFirestoreCollection<IEstablecimiento>;
  Auto: Observable<IEstablecimiento[]>;
  AutoDoc: AngularFirestoreDocument<IEstablecimiento>;


  //******************VARIABLE PARA SUBIR IMAGEN */

  private filepath: any;
  private downloadURL: Observable<string>








  constructor(private db: AngularFirestore, private storage: AngularFireStorage) {

    this.EstablecimientoCollection = this.db.collection('/preparcial/ZOwvS0XEdJNOrkM3KDcC/concesionaria');
    //this.AutoCollection = this.db.collection('/preparcial/ZOwvS0XEdJNOrkM3KDcC/autos');

  }









//************************************************ESTABLECIMIENTO             */


GetEstablecimientos(){

  this.Establecimiento = this.EstablecimientoCollection.snapshotChanges().pipe(map(actions => {
    return actions.map(a => {
      const data = a.payload.doc.data() as IEstablecimiento;
      data.id = a.payload.doc.id;
       return data;
    });
  }));


  return this.Establecimiento;

}




AltaEstablecimiento(obj: Establecimiento){




        let auxi :IEstablecimiento = {
          razon: obj.razon,
          direccion: obj.direccion,
          email: obj.email,
          telefono: obj.telefono,
          password: obj.password
        }

        this.EstablecimientoCollection.add(auxi);

}




























}
