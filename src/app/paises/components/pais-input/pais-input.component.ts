import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent {


  //emito un evento
  @Output() onEnter: EventEmitter<string> = new EventEmitter()

  paisBuscado: string="";

  constructor() { }

  buscar(){
    this.onEnter.emit(this.paisBuscado);
  }
 
}
