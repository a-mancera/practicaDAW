import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {Evento, EventoService}   from './evento.service';
import {LoginService}   from './login.service';

@Component({
	directives: [ROUTER_DIRECTIVES],
    template: `
  	<h1>Detalle Evento</h1>
  	<label>Nombre: {{evento.nombre}}</label><br>
  	<label>Resumen: {{evento.resumen}}</label><br>
  	<label>Descripcion: {{evento.descripcion}}</label><br>
	<label>Fecha: {{evento.fecha}}</label><br>
	<label>Hora: {{evento.hora}}</label><br>
	<label>Direccion: {{evento.direccion}}</label><br>
	<label>Patrocinador: {{evento.patrocinador}}</label><br>
	<label>Organizador: {{evento.organizador}}</label><br>
	<label>Tipo evento: {{evento.tipo}}</label><br>
	<button (click)="volver()">Volver</button>
  	`
})
export class EventoDetailComponent implements OnInit {
	hola = 'inicial';
    evento: Evento;

    constructor(private service:EventoService, private router:Router, routeParams: RouteParams) {
    	 let id = routeParams.get('id');
    	 this.hola = id;
    	 this.evento = { nombre:''};
    	 service.getEvento(id).subscribe(
            evento => this.evento= evento,
            error => console.error(error)
        );
        
    }

	volver(){
		this.router.navigate(['Eventos']);
	}

}