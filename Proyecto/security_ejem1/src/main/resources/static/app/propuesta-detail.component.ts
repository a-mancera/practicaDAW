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
  	 <button (click)="volver()">Volver</button>
	`
})
export class PropuestaDetailComponent implements OnInit {
	hola = 'bien';
	propuesta:Propuesta;
    constructor(private router:Router, 
    routeParams: RouteParams,
    private service:PropuestaService,private lService:LoginService) {
    	 let id = routeParams.get('id');
    	 this.propuesta = { nombre:''};
    	 service.getPropuesta(id).subscribe(
            propuesta => this.propuesta= propuesta,
            error => this.hola = error//console.error(error)
        	);
        	
        	this.hola = 'fin';
    }

	volver(){
		this.router.navigate(['Propuestas']);
	}
	
}