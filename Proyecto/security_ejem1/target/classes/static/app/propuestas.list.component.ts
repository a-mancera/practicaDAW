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
    <h1>Propuestas:</h1>
    <hr />
     <div *ngIf="!service.user.patrocinador">
    <div *ngFor="#i of propuestas">
    <div class="col-md-4 col-sm-4">
    	
     	<div class="panel panel-default">
         <div class="panel-heading">
         	<b>Nombre: {{i.nombre}}</b>
         </div>
         <div class="panel-body">
          <ul>
	    	<li>Resumen:{{i.resumen}}</li>
	    	<li>Direccion:{{i.direccion}}</li>
	    	<li>Tipo evento:{{i.tipo}}</li>
	    	<li *ngIf="i.organizador==service.user.name">Identificador para la creación del evento: {{i.id}}</li>
    	</ul>
         </div>         
         </div>
         </div>
    	</div> 
    	</div>
    	
    <div *ngIf="service.user.patrocinador">
    <div *ngFor="#i of propuestas">
    <div class="col-md-4 col-sm-4">
    	
     	<div class="panel panel-default">
         <div class="panel-heading">
         	<b><a [routerLink]="['DetallePropuesta', {id:i.id}]">Nombre: {{i.nombre}}</a></b>
         </div>
         <div class="panel-body">
          <ul>
	    	<li>Resumen:{{i.resumen}}</li>
	    	<li>Direccion:{{i.direccion}}</li>
	    	<li>Tipo evento:{{i.tipo}}</li>
	    	<li *ngIf="i.organizador==service.user.name">Identificador para la creación del evento: {{i.id}}</li>
    	</ul>
         </div>         
         </div>
         </div>
    	</div> 
    	</div>
      <div class="col-md-12 col-sm-4">
    <button *ngIf="!service.user.patrocinador"(click)="nuevo()">Nueva propuesta</button>
    <button (click)="volver()">Volver</button></div>
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