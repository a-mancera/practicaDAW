import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

import {EventoListComponent} from './eventos-list.component';
import {EventoDetailComponent} from './evento-detail.component';
import {LoginComponent} from './login.component';
import {UserFormComponent} from './form.user';
import {MensajeComponent} from './mensajes.component'
import {PropuestasListComponent} from './propuestas.list.component'
import {PropuestaFormComponent} from './propuesta.form';
import {PropuestaDetailComponent} from './propuesta-detail.component';
import {MensajeDetailComponent} from './mensaje-detail.component';
import {EventoFiltroComponent} from './evento-list-filtro.component';
import {OrganizadoresListComponent} from './organizadores-list.component';
import {OrganizadorDetailComponent} from './organizador-detail.component';
import {PatrocinadoresListComponent} from './patrocinadores-list.component';
import {PatrocinadorDetailComponent} from './patrocinadores-detail.component';


import {LoginService} from './login.service';
import {EventoService} from './evento.service';
import {ReseñaService} from './reseñas.service';
import {ComentarioService} from './comentario.service';
import {PropuestaService} from './propuesta.service';
import {MensajeService} from './mensaje.service';

import {Prueba} from './prueba';

import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  providers:  [LoginService, EventoService, ReseñaService,ComentarioService,PropuestaService, MensajeService,HTTP_PROVIDERS],
  directives: [LoginComponent, ROUTER_DIRECTIVES, Alert]
})
@RouteConfig([
  {path: '/eventos', name: 'Eventos', component: EventoListComponent, useAsDefault: true},
  {path: '/usuario', name: 'UsuarioNuevo', component: UserFormComponent},
  {path: '/evento/:id', name: 'EventoDetallado', component: EventoDetailComponent},
  {path: '/mensajes', name: 'Mensajes', component: MensajeComponent},
  {path: '/propuestas', name: 'Propuestas', component: PropuestasListComponent},
  {path: '/propuestas/nueva', name: 'NuevaPropuesta', component: PropuestaFormComponent},
  {path: '/propuestas/detalle/:id', name: 'DetallePropuesta', component: PropuestaDetailComponent},
  {path: '/mensajes/detalle/:id', name: 'DetalleMensaje', component: MensajeDetailComponent},
  {path: '/filtro', name: 'Filtro', component: EventoFiltroComponent},
  {path: '/organizadores', name: 'Organizadores', component: OrganizadoresListComponent},
  {path: '/organizadores/detalle/:id', name: 'OrganizadorDetalle', component: OrganizadorDetailComponent},
  {path: '/patrocinadores', name: 'Patrocinadores', component: PatrocinadoresListComponent},
  {path: '/patrocinadores/detalle/:id', name: 'PatrocinadorDetalle', component: PatrocinadorDetailComponent},
])
export class AppComponent {	
	constructor(private loginService: LoginService, private router:Router){}
	
	nuevoUsuario(){
		this.router.navigate(['UsuarioNuevo']);
	}
}
