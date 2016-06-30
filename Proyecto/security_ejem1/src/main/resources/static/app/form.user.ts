import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {User,TipoEvento,LoginService}   from './login.service';

@Component({
  template: `
  <h1>Nuevo usuario</h1><hr/>
  <div class="col-md-2 col-sm-12 col-xs-12"> </div> 
	<div class="col-md-8 col-sm-12 col-xs-12">                     
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            Nuevo usuario
                        </div>
                        <div class="panel-body">
                            <label>Nombre de usuario: </label>
						    <input [(ngModel)]="usuario.name" placeholder="Nombre de usuario"/><br>
						    <label>Contraseña: </label>
						    <input type="password"  [(ngModel)]="usuario.pass" placeholder="Contraseña"><br>
						    <label>Nombre: </label>
						    <input [(ngModel)]="usuario.nombre" placeholder="Nombre"/><br>
						    <label>Nombre de usuario: </label>
						    <textarea [(ngModel)]="usuario.descripcion" placeholder="descripcion"></textarea><br>
						    <label>Tipo de usuario: </label>
						    <input name="patrocinador" type="radio" (click)="tipoUsuario='patrocinador'"
								[checked]="tipoUsuario=='patrocinador'"/> Patrocinador
						    <input name="organizador" type="radio" (click)="tipoUsuario='organizador'"
								[checked]="tipoUsuario=='organizador'"/> Organizador
						    <br>    
						    <label>Tipos de evento:</label>	
						     <span *ngFor="#item of tiposEvento">
								<input type="checkbox" [(ngModel)]="item.checked"/> {{item.tipo}}
								</span>
							<br>
						    <label>Twitter: </label>
						    <input [(ngModel)]="usuario.twitter" placeholder="Twitter"/><br>
						    <label>Facebook: </label>
						    <input [(ngModel)]="usuario.facebook" placeholder="Facebook"/><br>
						    <label>Instagram: </label>
						    <input [(ngModel)]="usuario.instagram" placeholder="Instagram"/><br>
						    <label>Youtube: </label>
						    <input [(ngModel)]="usuario.youtube" placeholder="Youtube"/><br> 
						    <button (click)="crear()">Crear</button>
						    <button (click)="volver()">Volver</button>
                        </div>
                    </div>    
    
  </div>
  
  `
})
export class UserFormComponent {
  usuario: User;
  tiposEvento = new Array<TipoEvento>();
  tiposEventoa: TipoEvento[];
  name = 'Anybody';
  tipoUsuario='patrocinador';
  tipos='';
  constructor(
    private router:Router,
    routeParams:RouteParams,
    private service: LoginService){
    	this.usuario = { name:'',pass:'',roles:[],nombre:'',patrocinador:true,descripcion:'',
    	web:'', twitter:'',facebook:'',instagram:'',youtube:'' };
    	this.tipoUsuario = 'patrocinador';    	
    }
	
	ngOnInit(){
      this.lista = 'hola0';
      this.service.getTiposEventos().subscribe(
	        tiposEvento => this.tiposEvento = tiposEvento,
	        error => console.log(error)
      );
    }
    
    volver(){
    	this.router.navigate(['Eventos']);
    }
    
    crear(){
    	this.usuario.patrocinador = this.tipoUsuario=='patrocinador';
    	this.usuario.tiposEventos = [];
    	this.usuario.roles = new Array<string>();
    	this.usuario.roles.push('ROLE_USER');
    	this.usuario.roles.push('ROLE_ADMIN');
    	for (let i of this.tiposEvento){
    		if (i.checked){
    			this.usuario.tiposEventos.push(i.tipo);
    		}
    	}
    	this.service.crearUsuario(this.usuario).subscribe(
    	book => {}, 
    	error => this.name = error
    	);
    	this.router.navigate(['Eventos']);
    }
}