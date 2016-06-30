import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {Evento, EventoService}   from './evento.service';
import {LoginService, TipoEvento}   from './login.service';

export interface Filtro {  
    ciudad:string;
    tipos:string[];
}

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
        
    <div class="col-md-10 col-sm-12 col-xs-12">
                         <div class="panel panel-default">
                        <div class="panel-heading">
                           Filtro: 
                        </div>
                        <div class="panel-body">
                            <label>Ciudad: </label>
						    <input [(ngModel)]="filtro.ciudad" placeholder="Nombre de usuario"/><br>
						    <label>Tipos de evento:</label>	
						     <span *ngFor="#item of tiposEvento">
								<input type="checkbox" [(ngModel)]="item.checked"/> {{item.tipo}}
								</span>
							<br>
						    <button (click)="realizarFiltro()">Buscar</button>    
						    <button (click)="volver()">Volver</button>
                        </div>
                    </div>
                    
    <div *ngIf="mostrar">
    <div *ngFor="#evento of eventosFiltrados">
    <div class="col-md-4 col-sm-4">
    	
     	<div class="panel panel-default">
         <div class="panel-heading">
         	<b><a [routerLink]="['EventoDetallado', {id:evento.id}]">Nombre: {{evento.nombre}}</a></b>
         </div>
         <div class="panel-body">
          <ul>
	    	<li>Resumen:{{evento.resumen}}</li>
    		<li>Direccion:{{evento.direccion}}, {{evento.ciudad}}</li>
    		
    	</ul>
         </div>
         <div class="panel-footer">
         Tipo evento:{{evento.tipo}} 
         </div>
         </div>
         
         </div>  
                
    	</div> 
    	<p *ngIf="!resultados">Sin resultados</p>
    </div>
    
  `
})
export class EventoFiltroComponent implements OnInit {
	
	filtro:Filtro;
	mostrar = false;
	resultados = false;
	filtroPorTipos = false;
    eventos: Evento[];
	eventosFiltrados = new Array<Evento>();
	tiposEvento = new Array<TipoEvento>();
	
    constructor(private service:EventoService, private router:Router, private lService:LoginService) {
    	this.filtro = { ciudad:'',tipos:[] };
    }

    ngOnInit(){
      this.service.getEventos().subscribe(
        eventos => this.eventos = eventos,
        error => console.log(error)
      );
      
      this.lService.getTiposEventos().subscribe(
	        tiposEvento => this.tiposEvento = tiposEvento,
	        error => console.log(error)
      );
    }
	
	realizarFiltro(){
		this.resultados = false;
		this.eventosFiltrados = new Array<Evento>();
		for (let evento of this.eventos){
    		if (this.filtro.ciudad!=''){
    			if (evento.ciudad == this.filtro.ciudad){
    				for (let i of this.tiposEvento){
			    		if (i.checked){
			    			this.filtroPorTipos = true;
			    			if (i.tipo == evento.tipo){
			    				this.resultados = true;
    							this.eventosFiltrados.push(evento);		
			    			}
			    		}
			    	}  
			    	if (!this.filtroPorTipos){
			    		this.resultados = true;
    					this.eventosFiltrados.push(evento);		
			    	}  				
    			}
    		}else{
    				for (let i of this.tiposEvento){
			    		if (i.checked){
			    			if (i.tipo == evento.tipo){
			    				this.resultados = true;
    							this.eventosFiltrados.push(evento);		
			    			}
			    		}
			    	}  
    			}
    	}
		this.mostrar = true;
	}
	
	volver(){
		this.router.navigate(['Eventos']);
	}
}