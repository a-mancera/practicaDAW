import {Component, OnInit}   from 'angular2/core';
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';
import {Propuesta,PropuestaService}   from './propuesta.service';
import {Evento, EventoService}   from './evento.service';
import {LoginService}   from './login.service';
import {Mensaje, MensajeService}   from './mensaje.service';

import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {MultipartItem} from "./multipart-upload/multipart-item";
import {MultipartUploader} from "./multipart-upload/multipart-uploader";

@Component({
	directives: [ROUTER_DIRECTIVES],
    template: `
    <h1>Detalles del evento</h1>  	
	<hr />
					<div class="col-md-1 col-sm-12 col-xs-12" ></div>
	                <div class="col-md-8 col-sm-12 col-xs-12" >                     
                    <div class="panel panel-default">
                        <div class="panel-heading">
                           Detalles:
                        </div>
                        <div class="panel-body">
                            <label>Nombre: {{propuesta.nombre}}</label><br>
						  	<label>Resumen: {{propuesta.resumen}}</label><br>
						  	<label>Descripcion: {{propuesta.descripcion}}</label><br>
						  	<label>Organizador: {{propuesta.organizador}}</label><br>
							<label>Fecha: {{propuesta.fecha}}</label><br>
							<label>Hora: {{propuesta.hora}}</label><br>
							<label>Direccion: {{propuesta.direccion}}, {{propuesta.ciudad}}</label><br>
							<label>Tipo evento: {{propuesta.tipo}}</label><br>
							<label>Coste estimado: {{propuesta.estimacionPatrocinio}}</label><br>
							 <button (click)="contactarForm()">Contactar con organizador</button><br>
							 
							 <div *ngIf="contactar">
							 <div class="col-md-1 col-sm-12 col-xs-12" ></div>
	                <div class="col-md-8 col-sm-12 col-xs-12" >                     
                    <div class="panel panel-default">
                        <div class="panel-heading">
                           Nuevo mensaje:
                        </div>
                        <div class="panel-body">
                            <label>Asunto: </label>
							<input [(ngModel)]="nuevoMensaje.asunto" placeholder="Asunto"/><br>
							<label>Mensaje:</label><br>
							<textarea [(ngModel)]="nuevoMensaje.mensaje" placeholder="Descripcion" rows="8" cols="40"></textarea><br>
							<button (click)="enviarMensaje()">Enviar</button>
                        </div>
                    </div> 
               
					</div>
							 							 							 														
							 </div>
							 <div class="col-md-12 col-sm-12 col-xs-12" >						 
							 <p *ngIf="mensajeEnviado">Mensaje enviado</p> 
							 
							    <button (click)="crearEvento=true">Crear evento</button>	   	    
						  	    <button (click)="volver()">Volver</button>
						  	 <hr>
							<div *ngIf="crearEvento">
								<label>Código del evento:</label>
								<input [(ngModel)]="cod" placeholder="Nombre del evento"/><br>
								<label for="exampleInputFile">Cargar cartel: </label> <input type="file" (change)="selectFile($event)">				
								<button (click)="crear()">Confirmar</button>
							</div>
							</div>
                        </div>
                    </div> 
               
	</div>
	`
})
export class PropuestaDetailComponent implements OnInit {
	hola = 'bien';
	propuesta:Propuesta;
	crearEvento = false;
	cod:number;
	correcto:true;
	evento:Evento;
    contactar: false;
    private file: File;
	mensaje = 'hola';
	private images: String[] = [];
    foto = false;
    nuevoMensaje:Mensaje;
    mensajeEnviado:false;
    
    constructor(private router:Router, 
    routeParams: RouteParams,
    private service:PropuestaService,private lService:LoginService,
    private evService:EventoService,private http: Http,private mService:MensajeService) {
    	 let id = routeParams.get('id');
    	 this.propuesta = { nombre:''};
    	  
    	 service.getPropuesta(id).subscribe(
            propuesta => this.propuesta= propuesta,
            error => this.hola = error//console.error(error)
        	);
        	this.evento = { nombre:''};
        	this.hola = 'fin';
        	this.nuevoMensaje = { remitente:this.propuesta.organizador,emisor:lService.user.name};
    }

	volver(){
		this.router.navigate(['Propuestas']);
	}
	
	crear(){
		if (this.cod==this.propuesta.id){
			this.hola = 'Se puede crear el evento';
			this.evento.nombre = this.propuesta.nombre;
			this.evento.resumen = this.propuesta.resumen;
			this.evento.descripcion = this.propuesta.descripcion;
			this.evento.direccion = this.propuesta.direccion;
			this.evento.ciudad = this.propuesta.ciudad;
			this.evento.patrocinador = this.lService.user.name;
			this.evento.organizador = this.propuesta.organizador;
			this.evento.tipo = this.propuesta.tipo;
			this.evento.fecha = this.propuesta.fecha;
			this.evento.hora = this.propuesta.hora;
			if (this.foto){
				this.evento.foto = 'evento'+this.propuesta.id);
				this.upload();
			}else{
				this.evento.foto = 'defecto');
			}
			this.service.eliminar(this.propuesta).subscribe(
	            _ => {},
	            error => this.hola = error
	        	);
	        this.evService.crear(this.evento).subscribe(
	            _ => {},
	            error => this.hola = error
	        	);
			this.router.navigate(['Propuestas']);
		}else{
			this.hola = 'Codigo erroneo';
		}
	}
	
	selectFile($event) {		
		this.file = $event.target.files[0];
		this.foto = true;
		console.debug("Selected file: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);		
	}
	
	upload() {
		
		console.debug("Uploading file...");

		if (this.file == null){
			console.error("You have to select a file and set a description.");
			return;
		}		
		
		let formData = new FormData();
		formData.append("nombre", 'evento'+this.propuesta.id);			
		formData.append("file",  this.file);

		let multipartItem = new MultipartItem(new MultipartUploader({url: '/image/upload'}));
		
		multipartItem.formData = formData;
		
		multipartItem.callback = (data, status, headers) => {
						
			if (status == 200){				
				console.debug("File has been uploaded");
								
			} else {
				console.error("Error uploading file");
			}
		};
		
		multipartItem.upload();
	}
	
	contactarForm(){
		this.contactar = true;
		
	}
	
	enviarMensaje(){
		this.nuevoMensaje.remitente = this.propuesta.organizador;
		this.mService.guardarMensaje(this.nuevoMensaje).subscribe(
	    _ => {},
	    error => this.hola = error
	    );
	    this.mensajeEnviado=true;
	    this.contactar = false;
	}
}