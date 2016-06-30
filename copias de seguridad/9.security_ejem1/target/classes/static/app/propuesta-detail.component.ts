import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Propuesta,PropuestaService}   from './propuesta.service';
import {Evento, EventoService}   from './evento.service';
import {LoginService}   from './login.service';

@Component({
	directives: [ROUTER_DIRECTIVES],
    template: `
  	<h1>Detalle Evento</h1>
  	<label>Nombre: {{propuesta.nombre}}</label><br>
  	<label>Resumen: {{propuesta.resumen}}</label><br>
  	<label>Descripcion: {{propuesta.descripcion}}</label><br>
  	<label>Organizador: {{propuesta.organizador}}</label><br>
	<label>Fecha: {{propuesta.fecha}}</label><br>
	<label>Hora: {{propuesta.hora}}</label><br>
	<label>Direccion: {{propuesta.direccion}}</label><br>
	<label>Tipo evento: {{propuesta.tipo}}</label><br>
	<label>Coste estimado: {{propuesta.estimacionPatrocinio}}</label><br>
	 <button (click)="volver()">Contactar con organizador</button>
	    <button (click)="crearEvento=true">Crear evento</button>	   	    
  	    <button (click)="volver()">Volver</button>
  	 <hr>
	<div *ngIf="crearEvento">
		<label>Código del evento:</label>
		<input [(ngModel)]="cod" placeholder="Nombre del evento"/><br>
		
		<button (click)="crear()">Confirmar</button>
	</div>
	<p *ngIf="correcto">{{hola}} {{evento.nombre}}</p>
	`
})
export class PropuestaDetailComponent implements OnInit {
	hola = 'bien';
	propuesta:Propuesta;
	crearEvento = false;
	cod:number;
	correcto:true;
	evento:Evento;
    constructor(private router:Router, 
    routeParams: RouteParams,
    private service:PropuestaService,private lService:LoginService,
    private evService:EventoService) {
    	 let id = routeParams.get('id');
    	 this.propuesta = { nombre:''};
    	 service.getPropuesta(id).subscribe(
            propuesta => this.propuesta= propuesta,
            error => this.hola = error//console.error(error)
        	);
        	this.evento = { nombre:''};
        	this.hola = 'fin';
    }

	volver(){
		this.router.navigate(['Propuestas']);
	}
	
	crear(){
		if (this.cod==this.propuesta.id){
			this.hola = 'Se puede crear el evento';
			this.evento.nombre = this.propuesta.nombre;
			this.evento.resumen = this.propuesta.resumen;
			this.evento.descripcion = this.propuesta.descripcion;
			this.evento.direccion = this.propuesta.direccion;
			this.evento.patrocinador = this.lService.user.name;
			this.evento.organizador = this.propuesta.organizador;
			this.evento.tipo = this.propuesta.tipo;
			this.evento.fecha = this.propuesta.fecha;
			this.evento.hora = this.propuesta.hora;
			this.service.eliminar(this.propuesta).subscribe(
	            _ => {},
	            error => this.hola = error
	        	);
	        this.evService.crear(this.evento).subscribe(
	            _ => {},
	            error => this.hola = error
	        	);
			this.router.navigate(['Propuestas']);
		}else{
			this.hola = 'Codigo erroneo';
		}
	}
	
}