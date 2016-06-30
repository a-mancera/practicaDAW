import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {Mensaje, MensajeService}   from './mensaje.service';
import {LoginService}   from './login.service';



@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h2>Mensajes</h2>  
    <p>{{nombre}}</p>  
    <div *ngFor="#e of mensajes"><a [routerLink]="['DetalleMensaje',{id:e.id}]">{{e.fecha}}. Asunto: {{e.asunto}} de {{e.emisor}}</a></div>
  `
})
export class MensajeComponent implements OnInit {

    mensajes:Mensaje[];
	nombre:string;
    constructor(private router:Router, private service:LoginService,private menService:MensajeService) {}

    ngOnInit(){
      this.nombre = this.service.user.name;
      this.mensajes = this.service.user.mensajes;
      this.menService.getMensaje(this.service.user.name).subscribe(
        mensajes => this.mensajes = mensajes,
        error => console.log(error)
      );
    }

}