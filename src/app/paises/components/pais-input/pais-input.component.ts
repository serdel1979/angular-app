import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';



@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent {


  //emito un evento
  @Output() onEnter: EventEmitter<string> = new EventEmitter()
  @Output() onDebaunce: EventEmitter<string> = new EventEmitter()


  debauncer: Subject<string>=new Subject();

  paisBuscado: string="";

  constructor() { }

  buscar(){
    this.onEnter.emit(this.paisBuscado);
  }
 
}
