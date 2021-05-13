//IMPORTANCION COMPONENTE, INPUT PARA EL COMPONENTE HIJO, OUTPUT PARA EL COMPONENTE PADRE + EVENTEMITTER//
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-numero-empleados',
  templateUrl: './numero-empleados.component.html',
  styleUrls: ['./numero-empleados.component.css']
})
export class NumeroEmpleadosComponent implements OnInit {
  /* INPUT PARA COMUNICAR COMPONENTE PADRE CON COMPONENTE HIJO */
  @Input() todos!: number;
  @Input() masculino!: number;
  @Input() femenino!: number;
  /* OUTPUT PARA COMUNICAR COMPONENTE HIJO CON COMPONENTE PADRE */
  @Output() numeroRadioButtonChange = new EventEmitter<string>();


  /* ngmodel radioButtonSeleccionado */
  radioButtonSeleccionado = 'Todos';

  constructor() {
    this.todos = 0;
    this.masculino = 0;
    this.femenino = 0;
  }

  ngOnInit(): void {
  }
  /* metodo del output https://angular.io/guide/inputs-outputs  que no devuelve nada*/
  /* le pasamos el string del output + el evento emit y al evento emit le pasamos el radioButtonSeleccionado */
  radioChange(): void {
    this.numeroRadioButtonChange.emit(this.radioButtonSeleccionado);
  }


}
