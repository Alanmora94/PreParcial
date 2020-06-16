import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton-log-out',
  templateUrl: './boton-log-out.component.html',
  styleUrls: ['./boton-log-out.component.css']
})
export class BotonLogOutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  exit(){

    console.log("exit");
}


}
