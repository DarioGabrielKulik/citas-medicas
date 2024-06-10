import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-crear-citas',
  templateUrl: './crear-citas.component.html',
  styleUrl: './crear-citas.component.css'
})
export class CrearCitasComponent {
nombre: string = "";
fecha: string = "";
hora: string = "";
sintomas: string = "";

@Output() nuevaCita = new EventEmitter<any>();

formularioIncorrecto:boolean = false;

constructor(){}

agregarCita(){
  if(this.nombre == "" || this.fecha == "" || this.hora == "" || this.sintomas == "" ){
    this.formularioIncorrecto = true;
  }
  const CITA = {
    nombre: this.nombre,
    fecha: this.fecha,
    hora: this.hora,
    sintomas: this.sintomas
  }
  this.resetCampos();
  this.nuevaCita.emit(CITA);
}

resetCampos(){
  this.nombre = "";
  this.fecha = "";
  this.hora = "";
  this.sintomas = "";
}

}
