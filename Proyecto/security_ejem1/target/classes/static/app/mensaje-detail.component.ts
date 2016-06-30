import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Comentario,ComentarioService}   from './comentario.service';
import {Mensaje, MensajeService}   from './mensaje.service';
import {LoginService}   from './login.service';

@Component({
	directives: [ROUTER_DIRECTIVES],
    template: `
  	<h1>Mensaje: </h1>
  	<label>De: {{mensaje.emisor}}</label> <br> 	
  	<label>Fecha: {{mensaje.fecha}}</label> <br>
  	<label>Asunto: {{mensaje.asunto}}</label> <br>
  	<label>Mensaje: {{mensaje.mensaje}}</label> <br> 	 	 		
	<button (click)="volver()">Volver</button><br><br>
	<h4>Responder mensaje: </h4>
	<label>Asunto: </label>
	<input [(ngModel)]="respuesta.asunto" placeholder="Asunto"/><br>
	<label>Mensaje:</label><br>
	<textarea [(ngModel)]="respuesta.mensaje" placeholder="Descripcion" rows="8" cols="50"></textarea><br>
	<button (click)="comentarioNuevo()">Responder</button>
	<p>emisor {{respuesta.emisor}}, remitente {{respuesta.remitente}}</p>	
  	`
})
export class MensajeDetailComponent implements OnInit {
	hola = 'inicial';
    mensaje:Mensaje;
    mn:Mensaje;
    respuesta:Mensaje;
    
    constructor(private service:MensajeService, private router:Router, 
    routeParams: RouteParams,private comService: ComentarioService,private lService:LoginService) {
    	 let id = routeParams.get('id');
    	 this.mensaje = { mensaje:'' };    	 
    	 service.getMensajeDetallado(id).subscribe(
            mensaje => this.mensaje= mensaje,
            error => this.hola = error
        	);
        this.respuesta = { remitente:'a', emisor:'',
    	 asunto:'',mensaje:'',leido:false };
        }

	volver(){
		if (!this.mensaje.leido){
			this.hola = 'entro';
	        	this.service.eliminarMensaje(this.mensaje).subscribe(
	            _ => {},
	            error => this.hola = error
	        	);
	        	
	        	this.mn = { remitente:this.mensaje.remitente, emisor:this.mensaje.emisor
	        	,asunto:this.mensaje.asunto,mensaje:this.mensaje.mensaje,leido:true};
	        	
	        	this.service.guardarMensaje(this.mn).subscribe(
	            _ => {},
	            error => this.hola = error
	        	);
	        	
	        	this.hola = 'acabo';
	        }
		this.router.navigate(['Mensajes']);
	}
	
	comentarioNuevo(){
		this.respuesta.emisor = this.mensaje.remitente;
		this.respuesta.remitente = this.mensaje.emisor;
		this.service.guardarMensaje(this.respuesta).subscribe(
	    _ => {},
	    error => this.hola = error
	    );
	    this.router.navigate(['Mensajes']);
	}

}