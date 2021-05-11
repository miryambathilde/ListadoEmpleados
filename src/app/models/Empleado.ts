//creamos el modelo de la clase empleado con los campos que tiene y definimos el tipo

export class Empleado {
  numeroEmpleado: number;
  nombre: string;
  apellidos: string;
  sexo: string;
  salario: number;
  moneda: string;

  //para iniciar esta clase tenemos que crear el constructor y le pasamos por parametros las varibles de las propiedades definidas:
  constructor(numeroEmpleado: number, nombre: string, apellidos: string, sexo: string, salario: number, moneda: string) {
    this.numeroEmpleado = numeroEmpleado;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.sexo = sexo;
    this.salario = salario;
    this.moneda = '€';
  }

}
