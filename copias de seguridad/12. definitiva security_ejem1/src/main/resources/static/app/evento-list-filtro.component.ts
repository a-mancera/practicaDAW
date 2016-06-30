import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {Evento, EventoService}   from './evento.service';
import {LoginService}   from './login.service';

export interface Filtro {  
    ciudad:string;
    tipos:string[];
}

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Filtro</h2>
    <label>Ciudad: </label>
    <input [(ngModel)]="filtro.ciudad" placeholder="Nombre de usuario"/><br>
    <button (click)="realizarFiltro()">Buscar</button>
    <div *ngIf="mostrar">
    <ul>
      <li *ngFor="#evento of eventosFiltrados">
    	<a [routerLink]="['EventoDetallado', {id:evento.id}]">Nombre: {{evento.nombre}}</a>
    	<ul>
    	<li>Resumen:{{evento.resumen}}</li>
    	<li>Direccion:{{evento.direccion}}, {{evento.ciudad}}</li>
    	<li>Tipo evento:{{evento.tipo}}</li>
    	</ul>          
      </li>
      <hr color="blue" size=3>
    </ul>
    <p *ngIf="!resultados">Sin resultados</p>
    </div>
  `
})
export class EventoFiltroComponent implements OnInit {
	
	filtro:Filtro;
	mostrar = false;
	resultados = false;
    eventos: Evento[];
	eventosFiltrados = new Array<Evento>();
    constructor(private service:EventoService, private router:Router) {
    	this.filtro = { ciudad:'',tipos:[] };
    }

    ngOnInit(){
      this.service.getEventos().subscribe(
        eventos => this.eventos = eventos,
        error => console.log(error)
      );
    }
	
	realizarFiltro(){
		this.eventosFiltrados = new Array<Evento>();
		for (let i of this.eventos){
    		if (this.filtro.ciudad!=''){
    			if (i.ciudad == this.filtro.ciudad){
    				this.resultados = true;
    				this.eventosFiltrados.push(i);
    			}
    		}
    	}
		this.mostrar = true;
	}
}