import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {PropuestaService, Propuesta} from './propuesta.service';
import {Evento, EventoService}   from './evento.service';
import {LoginService}   from './login.service';

export interface Mensaje {  
    //id?: number;
    mensaje:string;
}

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Propuestas</h2> 
    <ul *ngIf="!service.user.patrocinador">
      <li *ngFor="#i of propuestas">
    	Nombre: {{i.nombre}}
    	<ul>
    	<li>Resumen:{{i.resumen}}</li>
    	<li>Direccion:{{i.direccion}}</li>
    	<li>Tipo evento:{{i.tipo}}</li>
    	</ul>          
      </li>
      </ul>
      <ul *ngIf="service.user.patrocinador">
      <li *ngFor="#i of propuestas">
    	<a [routerLink]="['DetallePropuesta', {id:i.id}]">Nombre: {{i.nombre}}</a>
    	<ul>
    	<li>Resumen:{{i.resumen}}</li>
    	<li>Direccion:{{i.direccion}}</li>
    	<li>Tipo evento:{{i.tipo}}</li>
    	</ul>          
      </li>
      </ul>
    <button *ngIf="!service.user.patrocinador"(click)="nuevo()">Nueva propuesta</button>
    <button (click)="volver()">Volver</button>
  `
})
export class PropuestasListComponent implements OnInit {
	propuestas: Propuesta[];
   
    constructor(private router:Router, private service:LoginService,
    private propService:PropuestaService) {}

    ngOnInit(){
   		this.propService.getPropuestas().subscribe(
            propuestas => this.propuestas= propuestas,
            error => console.error(error)
        	);
    }
	
	volver(){
		this.router.navigate(['Eventos']);
	}
	
	nuevo(){
		this.router.navigate(['NuevaPropuesta']);
	}
}