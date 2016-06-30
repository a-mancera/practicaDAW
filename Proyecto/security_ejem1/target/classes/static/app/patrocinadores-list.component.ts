import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {Evento, EventoService}   from './evento.service';
import {LoginService, User}   from './login.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Patrocinadores:</h2>
    <ul *ngFor="#u of usuarios">
      <li *ngIf="u.patrocinador">
      <a [routerLink]="['PatrocinadorDetalle', {id:u.name}]">Nombre de usuario: {{u.name}}</a>
      </li>    	
    	<li *ngIf="u.patrocinador">Nombre:{{u.nombre}}</li>
    	<li *ngIf="u.patrocinador">Descripcion:{{u.descripcion}}</li>     	   	                  
    </ul>
    <button (click)="volver()">Volver</button>
  `
})
export class PatrocinadoresListComponent implements OnInit {

    usuarios: User[];
	hola = 'bien';
    constructor(private service:LoginService, private router:Router) {
    
    }

    ngOnInit(){
      this.service.getUsuarios().subscribe(
        usuarios => this.usuarios = usuarios,
        error => this.hola = error;
      );
      
      
    }
	volver(){
		this.router.navigate(['Eventos']);
	}
}