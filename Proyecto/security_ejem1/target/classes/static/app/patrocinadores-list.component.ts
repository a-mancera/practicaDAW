import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {Evento, EventoService}   from './evento.service';
import {LoginService, User}   from './login.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    
    <h1>Patrocinadores:</h1>
    <hr />
    <div *ngFor="#u of usuarios">
    <div *ngIf="u.patrocinador">
    <div class="col-md-4 col-sm-4">
    	
     	<div class="panel panel-default">
         <div class="panel-heading">
         	<b><a [routerLink]="['PatrocinadorDetalle', {id:u.name}]">Nombre de usuario: {{u.name}}</a></b>
         </div>
         <div class="panel-body">
          <ul>
	    	<li *ngIf="u.patrocinador">Nombre:{{u.nombre}}</li>
    		<li *ngIf="u.patrocinador">Descripcion:{{u.descripcion}}</li> 
    	</ul>
    	
         </div>
        
         </div>
         </div>
         </div>
         
    	</div> 
 <div class="col-md-12 col-sm-4">
 <button (click)="volver()">Volver</button>
 </div>
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