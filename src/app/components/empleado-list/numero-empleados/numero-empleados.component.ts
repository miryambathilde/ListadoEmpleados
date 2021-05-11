//IMPORTANCION COMPONENTE, INPUT DEL COMPONENTE HIJO//
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero-empleados',
  templateUrl: './numero-empleados.component.html',
  styleUrls: ['./numero-empleados.component.css']
})
export class NumeroEmpleadosComponent implements OnInit {
  /* INPUT PARA COMUNICAR CON COMPONENTE PADRE */
  @Input() todos!: number;
  @Input() masculino!: number;
  @Input() femenino!: number;

  /* ngmodel radioButtonSeleccionado */
  radioButtonSeleccionado = 'Todos';

  constructor() {
    this.todos = 0;
    this.masculino = 0;
    this.femenino = 0;
  }

  ngOnInit(): void {
  }

}
