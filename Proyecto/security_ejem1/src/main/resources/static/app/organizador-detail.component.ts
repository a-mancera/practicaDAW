import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Comentario,ComentarioService}   from './comentario.service';
import {Evento, EventoService}   from './evento.service';
import {LoginService, User}   from './login.service';

@Component({
	directives: [ROUTER_DIRECTIVES],
    template: `
    <h1>Detalle del organizador</h1>  	
	<hr />
					<div class="col-md-1 col-sm-12 col-xs-12" ></div>
	                <div class="col-md-8 col-sm-12 col-xs-12" >                     
                    <div class="panel panel-default">
                        <div class="panel-heading">
                           Detalles:
                        </div>
                        <div class="panel-body">
                            <label>Nombre de usuario: {{usuario.name}}</label><br>
						  	<label>Nombre: {{usuario.nombre}}</label><br>
							<label>Descripcion: {{usuario.descripcion}}</label><br>
						    <label>Web: <a href="https://{{usuario.web}}">{{usuario.web}}</a></label><br>
						    <label>Tipos de eventos que organiza</label><br>
						    <label><img src="assets/img/twitter.png"/>Twitter: <a href="https://twitter.com/{{usuario.twitter}}">
						    {{usuario.twitter}}</a></label><br>							    							    			    						   
						    <label><img src="assets/img/facebook.png"/>Facebook: <a href="https://www.facebook.com/{{usuario.facebook}}">
						    {{usuario.facebook}}</a></label><br>	
						    <label><img src="assets/img/instagram.png"/>Instagram: <a href="https://www.instagram.com/{{usuario.instagram}}">
						    {{usuario.instagram}}</a></label><br>
						    <label><img src="assets/img/youtube.png"/>Instagram: <a href="{{usuario.youtube}}">
						    {{usuario.youtube}}</a></label><br>
                        </div>
                    </div> 
               
	</div>
	
    <div class="col-md-10 col-sm-12 col-xs-12">
                   
                    <div class="chat-panel panel panel-default chat-boder chat-panel-head" >
                        <div class="panel-heading">
                            <i class="fa fa-comments fa-fw"></i>
                            Eventos:
                            
                        </div>
    <div class="panel-body">
    						<div *ngFor="#evento of eventos"> 
    						<div *ngIf="evento.organizador==usuario.name">
                            <ul class="chat-box">
                                <li class="left clearfix">             
                                     <span class="chat-img pull-left">
                                        <img src="assets/img/{{evento.tipo}}.png" alt="User" />
                                     </span>
                                    
                                    <div class="chat-body">                                        
                                            <strong ><a [routerLink]="['EventoDetallado', {id:evento.id}]">{{evento.nombre}}</a></strong>
                                            <small class="pull-right text-muted">
                                                <i class="fa fa-clock-o fa-fw"></i>
                                            </small>                                                                              
									     Resumen:{{evento.resumen}}<br>
								    	Direccion:{{evento.direccion}},{{evento.ciudad}}<br>
								    	Tipo evento:{{evento.tipo}}
                                    </div>
                                </li>                                
                            </ul></div>
                        </div>
                        </div>
    </div>    
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