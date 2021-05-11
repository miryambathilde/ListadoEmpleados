import { Component, OnInit } from '@angular/core';
/* modelo de la clase empleado */
import { Empleado } from 'src/app/models/Empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {
  /* iteramos el array de la variable listEmpleados donde iteramos el modelo de la clase Empleado y el array con las propiedades */
  listEmpleados: Empleado [] = [
    {numeroEmpleado: 1, nombre: 'Sergio', apellidos: 'Sánchez', sexo:'Masculino', salario: 15.000},
    {numeroEmpleado: 2, nombre: 'Miryam', apellidos: 'Bathilde', sexo:'Femenino', salario: 35.000},
    {numeroEmpleado: 3, nombre: 'Oliver', apellidos:'Crevillen', sexo:'Masculino', salario: 10.000},
    {numeroEmpleado: 4, nombre: 'Manuela', apellidos: 'Pérez', sexo:'Femenino', salario: 18.000},
    {numeroEmpleado: 5, nombre: 'Lola', apellidos: 'Lozano', sexo:'Femenino', salario: 20.000},
    {numeroEmpleado: 6, nombre: 'Sergio', apellidos: 'De Sousa', sexo:'Masculino', salario: 22.000},
    {numeroEmpleado: 7, nombre: 'Luca', apellidos: 'De Sousa', sexo:'Masculino', salario: 17.000},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
