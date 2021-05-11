import { NgModule } from '@angular/core';
/* FORMS MODULE PARA DIRECTIVA NG MODEL */
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// COMPONENTES//
import { AppComponent } from './app.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { NumeroEmpleadosComponent } from './components/empleado-list/numero-empleados/numero-empleados.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoListComponent,
    NumeroEmpleadosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
