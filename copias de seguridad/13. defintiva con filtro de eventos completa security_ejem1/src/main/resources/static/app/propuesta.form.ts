import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {User,TipoEvento,LoginService}   from './login.service';
import {PropuestaService, Propuesta} from './propuesta.service';

@Component({
  template: `
  <div><h2>Nueva propuesta</h2></div>  
  <label>Nombre del evento: </label>
    <input [(ngModel)]="propuesta.nombre" placeholder="Nombre del evento"/><br>
    <label>Resumen: </label>
    <textarea [(ngModel)]="propuesta.resumen" placeholder="Resumen" rows="3" cols="50"></textarea><br>
	<label>Descripcion: </label>
    <textarea [(ngModel)]="propuesta.descripcion" placeholder="Descripcion" rows="8" cols="50"></textarea><br>
	<label>Direccion: </label>
    <input [(ngModel)]="propuesta.direccion" placeholder="Direccion"/><br>
    <label>Ciudad: </label>
    <input [(ngModel)]="propuesta.ciudad" placeholder="Direccion"/><br>
	<label>Tipo: </label><br>
    <span *ngFor="#t of service.user.tiposEventos">
	<input name="tipo" type="radio" (click)="tipoSeleccionado(t)"/>{{t}}<br>
	</span><br>
	<label>Fecha: </label>
    <input [(ngModel)]="propuesta.fecha" placeholder="Fecha"/><br>
	<label>Hora: </label>
    <input [(ngModel)]="propuesta.hora" placeholder="Hora"/><br>
	<label>Estimacion coste patrocinio: </label>
    <input [(ngModel)]="propuesta.estimacionPatrocinio" placeholder="Estimacion coste"/><br>
	<p>{{hola}}</p>
	
  <button (click)="crear()">Crear propuesta</button>
  <button (click)="volver()">Volver</button>
   `
})
export class PropuestaFormComponent {
  propuesta:Propuesta;
  tipoSel:string;
  hola = 'bien';
  constructor(
    private router:Router,
    routeParams:RouteParams,
    private service: LoginService, 
    private propService:PropuestaService){
  		this.propuesta = { nombre:'', resumen'',descripcion:''
  		,direccion:'',organizador:service.user.name,tipo:'',fecha:'',
  		hora:'' };
    }
	
	ngOnInit(){
      
    }
    
    volver(){
    	this.router.navigate(['Propuestas']);
    }
    
    crear(){
    	this.propuesta.tipo = this.tipoSel;
    	this.propService.crear(this.propuesta).subscribe(
            propuesta => {},
            error => this.hola = error
        	);
    	this.router.navigate(['Propuestas']);
    }
    
    tipoSeleccionado(tip:string){
    	this.tipoSel = tip;
    }
}