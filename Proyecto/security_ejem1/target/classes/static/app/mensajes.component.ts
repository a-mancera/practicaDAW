import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {Evento, EventoService}   from './evento.service';
import {LoginService}   from './login.service';

export interface Mensaje {  
    //id?: number;
    mensaje:string;
}

@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Mensajes</h2>  
    <p>{{nombre}}</p>  
    <ul>
      <li *ngFor="#m of mensajes">{{m}}    	
      </li>
      </ul>
  `
})
export class MensajeComponent implements OnInit {

    mensajes:string[];
	nombre:string;
    constructor(private router:Router, private service:LoginService) {}

    ngOnInit(){
      this.nombre = this.service.user.name;
      this.mensajes = this.service.user.mensajes;
    }

}