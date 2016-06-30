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
    <label>Nuevo comentario:</label><br> 
    <textarea [(ngModel)]="comentario.comentario" placeholder="Comentario" rows="10" cols="80"></textarea><br>
    <label>Valoracion: </label>   
    <input name="val" type="radio" (click)="val = 0"[checked]="val == 0"/> 0
    <input name="val" type="radio" (click)="val = 0.5"[checked]="val == 0.5"/> 0.5
    <input name="val" type="radio" (click)="val = 1"[checked]="val == 1"/> 1
    <input name="val" type="radio" (click)="val = 1.5"[checked]="val == 1.5"/> 1.5
    <input name="val" type="radio" (click)="val = 2"[checked]="val == 2"/> 2
    <input name="val" type="radio" (click)="val = 2.5"[checked]="val == 2.5"/> 2.5
    <input name="val" type="radio" (click)="val = 3"[checked]="val == 3"/> 3
    <input name="val" type="radio" (click)="val = 3.5"[checked]="val == 3.5"/> 3.5
    <input name="val" type="radio" (click)="val = 4"[checked]="val == 4"/> 4
    <input name="val" type="radio" (click)="val = 4.5"[checked]="val == 4.5"/> 4.5
    <input name="val" type="radio" (click)="val = 5"[checked]="val == 5"/> 5
    <br>
	<button (click)="comentarioNuevo()">Guardar comentario</button>
	<button (click)="volver()">Volver</button><br>
	<p>{{hola}}</p>
  	`
})
export class EventoDetailComponent implements OnInit {
	hola = 'inicial';
    evento: Evento;
	comentario:Comentario;
	comentarios:Comentario[];
	val = 5;
    constructor(private service:EventoService, private router:Router, 
    routeParams: RouteParams,private comService: ComentarioService,private lService:LoginService) {
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
        	this.comentario = { evento:id,comentario:'',valoracion:5,fecha:'',hora:'',usuario:'anonimo' };
        	if (lService.isLogged){
        		this.comentario.usuario = lService.user.name;
        	}
    }

	volver(){
		this.router.navigate(['Eventos']);
	}
	
	comentarioNuevo(){
		
		this.comService.crearComentario(this.comentario).subscribe(
            comentarios => {},
            error => this.hola = error
        	);
    	this.router.navigate(['Eventos']);
	}

}