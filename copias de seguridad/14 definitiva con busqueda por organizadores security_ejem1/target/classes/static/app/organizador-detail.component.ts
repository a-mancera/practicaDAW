import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Comentario,ComentarioService}   from './comentario.service';
import {Evento, EventoService}   from './evento.service';
import {LoginService, User}   from './login.service';

@Component({
	directives: [ROUTER_DIRECTIVES],
    template: `
  	<h1>Detalle organizador</h1>
  	<label>Nombre de usuario: {{usuario.name}}</label><br>
  	<label>Nombre: {{usuario.nombre}}</label><br>
	<label>Descripcion: {{usuario.descripcion}}</label><br>
    <label>Web: <a>{{usuario.web}}</a></label><br>
    <label>Tipos de eventos que organiza</label><br>
    <label>Twitter: {{usuario.twitter}}</label><br>
    <label>Facebook: {{usuario.facebook}}</label><br>
    <label>Instagram: {{usuario.instagram}}</label><br>
    <label>Youtube: {{usuario.youtube}}</label><br>
    <br>
    <h4>Eventos</h4>
    <ul *ngFor="#evento of eventos">
      <li *ngIf="evento.organizador==usuario.name">
    	<a [routerLink]="['EventoDetallado', {id:evento.id}]">Nombre: {{evento.nombre}}</a>
    	<ul>
    	<li>Resumen:{{evento.resumen}}</li>
    	<li>Direccion:{{evento.direccion}},{{evento.ciudad}}</li>
    	<li>Tipo evento:{{evento.tipo}}</li>
    	</ul>          
      </li>
    </ul>
    <button (click)="volver()">Volver</button>
  	`
})
export class OrganizadorDetailComponent implements OnInit {
	hola = 'inicial';
    eventos: Evento[];
	usuario:User;
	
    constructor(private service:EventoService, private router:Router, 
    routeParams: RouteParams,private comService: ComentarioService,private lService:LoginService) {
    	 let id = routeParams.get('id');
    	 this.hola = id;    	 
    	 this.usuario = { name='' };
    	 service.getEventos().subscribe(
            eventos => this.eventos= eventos,
            error => console.error(error)
        	);
          lService.getUsuario(id).subscribe(
            usuario => this.usuario= usuario,
            error => this.hola = error
        	);
    }
    
	volver(){
		this.router.navigate(['Organizadores']);
	}
}