import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
 listCitas: any[]=[];

 agregarCitas(cita:any){
  this.listCitas.push(cita);
 }

 eliminarDeLista(i:number){
  this.listCitas.splice(i,1);
 }
}
