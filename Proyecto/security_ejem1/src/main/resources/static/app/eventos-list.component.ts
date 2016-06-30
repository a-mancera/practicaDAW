import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {Evento, EventoService}   from './evento.service';
import {LoginService}   from './login.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h1>Eventos</h1>
    <hr />
    <div *ngFor="#evento of eventos">
    <div class="col-md-4 col-sm-4">
    	
     	<div class="panel panel-default">
         <div class="panel-heading">
         	<b><a [routerLink]="['EventoDetallado', {id:evento.id}]">Nombre: {{evento.nombre}}</a></b>
         </div>
         <div class="panel-body">
          <ul>
    	<li>Resumen:{{evento.resumen}}</li>
    	<li>Direccion:{{evento.direccion}},{{evento.ciudad}}</li>
    	<li>Tipo evento:{{evento.tipo}}</li>
    	</ul>
         </div>
         <div class="panel-footer">
         Fecha: {{evento.fecha}}
         </div>
         </div>
         </div>
    	</div>  
  `
})
export class EventoListComponent implements OnInit {

    eventos: Evento[];

    constructor(private service:EventoService, private router:Router) {}

    ngOnInit(){
      this.service.getEventos().subscribe(
        eventos => this.eventos = eventos,
        error => console.log(error)
      );
    }

}