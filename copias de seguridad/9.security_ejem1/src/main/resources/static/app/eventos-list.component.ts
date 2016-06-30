import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {Evento, EventoService}   from './evento.service';
import {LoginService}   from './login.service';

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Eventos</h2>
    <ul>
      <li *ngFor="#evento of eventos">
    	<a [routerLink]="['EventoDetallado', {id:evento.id}]">Nombre: {{evento.nombre}}</a>
    	<ul>
    	<li>Resumen:{{evento.resumen}}</li>
    	<li>Direccion:{{evento.direccion}}</li>
    	<li>Tipo evento:{{evento.tipo}}</li>
    	</ul>          
      </li>
      <hr color="blue" size=3>
    </ul>
    
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