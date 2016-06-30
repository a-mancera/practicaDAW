import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';

import {Mensaje, MensajeService}   from './mensaje.service';
import {LoginService}   from './login.service';



@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <h1>Mensajes:</h1>
    <div class="col-md-12 col-sm-12 col-xs-12">
                   
                    <div class="chat-panel panel panel-default chat-boder chat-panel-head" >
                        <div class="panel-heading">
                            <i class="fa fa-comments fa-fw"></i>
                            Mensajes:                            
                        </div>
    <div class="panel-body">
    						<div *ngFor="#e of mensajes"> 
                            <ul class="chat-box">
                                <li class="left clearfix">                                                  
                                    <div *ngIf="e.leido">
                                     <span class="chat-img pull-left">
                                        <img src="assets/img/leido.png" alt="User" />
                                     </span>
                                    </div>
                                    <div *ngIf="!e.leido">
                                     <span class="chat-img pull-left">
                                        <img src="assets/img/noleido.png" alt="User" />
                                     </span>
                                    </div>
                                    <div class="chat-body">                                        
                                            <strong ><a [routerLink]="['DetalleMensaje',{id:e.id}]"> Asunto: {{e.asunto}} de {{e.emisor}}</a></strong>
                                            <small class="pull-right text-muted">
                                                <i class="fa fa-clock-o fa-fw"></i>{{e.fecha}}
                                            </small>                                      
                                    </div>
                                </li>                                
                            </ul></div>
                        </div>
    </div>    
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