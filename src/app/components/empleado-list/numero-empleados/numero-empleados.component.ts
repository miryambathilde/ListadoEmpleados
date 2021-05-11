import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-numero-empleados',
  templateUrl: './numero-empleados.component.html',
  styleUrls: ['./numero-empleados.component.css']
})
export class NumeroEmpleadosComponent implements OnInit {
  /* ngmodel radioButtonSeleccionado */
  radioButtonSeleccionado = 'Todos';

  constructor() { }

  ngOnInit(): void {
  }

}
