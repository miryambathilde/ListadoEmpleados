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
    {numeroEmpleado: 1, nombre: 'Sergio', apellidos: 'Sánchez', sexo:'Masculino', salario: 15000, moneda: '€'},
    {numeroEmpleado: 2, nombre: 'Miryam', apellidos: 'Bathilde', sexo:'Femenino', salario: 35000, moneda: '€'},
    {numeroEmpleado: 3, nombre: 'Oliver', apellidos:'Crevillen', sexo:'Masculino', salario: 10000, moneda: '€'},
    {numeroEmpleado: 4, nombre: 'Manuela', apellidos: 'Pérez', sexo:'Femenino', salario: 18000, moneda: '€'},
    {numeroEmpleado: 5, nombre: 'Lola', apellidos: 'Lozano', sexo:'Femenino', salario: 20000, moneda: '€'},
    {numeroEmpleado: 6, nombre: 'Sergio', apellidos: 'De Sousa', sexo:'Masculino', salario: 22000, moneda: '€'},
    {numeroEmpleado: 7, nombre: 'Luca', apellidos: 'De Sousa', sexo:'Masculino', salario: 17000, moneda: '€'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

  /* metodo para obtener el total de empleados que nos devuelve un number, y le decimos que devuelva la longitud de numeros del array de listEmpleados  */
  obtenerTotalEmpleados(): number {
    return this.listEmpleados.length;
  }

  /* metodo para obtener el total de empleados FEMENINOS que nos devuelve un number, y le decimos que devuelva la lista de empleados filtrada por sexo
  y pasamos por parametro
  el arrow function en donde dentro de list el sexo sea exactamente igual a Femenino + el numero de empleados femeninos  */
  obtenerTotalFemeninos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Femenino').length;
  }

  /* metodo para obtener el total de empleados FEMENINPOS que nos devuelve un number, y le decimos que devuelva la lista de empleados filtrada
  por sexo y pasamos por parametro
  el arrow function en donde dentro de list el sexo sea exactamente igual a Masculino + el numero de empleados femeninos  */
  obtenerTotalMasculinos(): number {
    return this.listEmpleados.filter(list => list.sexo === 'Masculino').length;
  }
}
