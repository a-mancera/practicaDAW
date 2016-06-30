import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Comentario,ComentarioService}   from './comentario.service';
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
	<hr>
	<h1>Reseñas:</h1>
	<ul *ngFor="#c of comentarios">
      <li> Comentario de usuario {{c.usuario}} el {{c.fecha}} a las {{c.hora}}</li>
      <li >
        Comentario: {{c.comentario}}
      </li>
      <li>Valoracion: {{c.valoracion}}</li>
    </ul>
	<button (click)="volver()">Volver</button>
  	`
})
export class EventoDetailComponent implements OnInit {
	hola = 'inicial';
    evento: Evento;
	comentario:Comentario;
	comentarios:Comentario[];
    constructor(private service:EventoService, private router:Router, routeParams: RouteParams,comService: ComentarioService) {
    	 let id = routeParams.get('id');
    	 this.hola = id;
    	 this.evento = { nombre:''};
    	 
    	 service.getEvento(id).subscribe(
            evento => this.evento= evento,
            error => console.error(error)
        	);
        	//this.comentario = { evento:1,comentario:'Hola',valoracion:5,fecha:'22/06/2016',hora:'20:20',usuario:'anonimo' };
        comService.getComentariosEvento(id).subscribe(
            comentarios => this.comentarios= comentarios,
            error => this.hola = error
        	);
        	//this.comentarios = [ { evento:1,comentario:'Hola',valoracion:5,fecha:'22/06/2016',hora:'20:20',usuario:'anonimo' } ];
    }

	volver(){
		this.router.navigate(['Eventos']);
	}

}