import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

import {BookListComponent} from './book-list.component';
import {EventoListComponent} from './eventos-list.component';
import {BookDetailComponent} from './book-detail.component';
import {EventoDetailComponent} from './evento-detail.component';
import {BookFormComponent} from './book-form.component';
import {LoginComponent} from './login.component';
import {UserFormComponent} from './form.user';
import {MensajeComponent} from './mensajes.component'
import {PropuestasListComponent} from './propuestas.list.component'
import {PropuestaFormComponent} from './propuesta.form';
import {PropuestaDetailComponent} from './propuesta-detail.component';
import {MensajeDetailComponent} from './mensaje-detail.component';
import {EventoFiltroComponent} from './evento-list-filtro.component';

import {BookService} from './book.service';
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
  providers:  [BookService, LoginService, EventoService, ReseñaService,ComentarioService,PropuestaService, MensajeService,HTTP_PROVIDERS],
  directives: [LoginComponent, ROUTER_DIRECTIVES, Alert]
})
@RouteConfig([
  {path: '/eventos', name: 'Eventos', component: EventoListComponent, useAsDefault: true},
  {path: '/book/:id', name: 'BookDetail', component: BookDetailComponent},
  {path: '/book/new', name: 'BookNew', component: BookFormComponent},
  {path: '/book/edit/:id', name: 'BookEdit', component: BookFormComponent},
  {path: '/usuario', name: 'UsuarioNuevo', component: UserFormComponent},
  {path: '/evento/:id', name: 'EventoDetallado', component: EventoDetailComponent},
  {path: '/mensajes', name: 'Mensajes', component: MensajeComponent},
  {path: '/propuestas', name: 'Propuestas', component: PropuestasListComponent},
  {path: '/propuestas/nueva', name: 'NuevaPropuesta', component: PropuestaFormComponent},
  {path: '/propuestas/detalle/:id', name: 'DetallePropuesta', component: PropuestaDetailComponent},
  {path: '/mensajes/detalle/:id', name: 'DetalleMensaje', component: MensajeDetailComponent},
  {path: '/filtro', name: 'Filtro', component: EventoFiltroComponent}
])
export class AppComponent {	
	constructor(private loginService: LoginService, private router:Router){}
	
	nuevoUsuario(){
		this.router.navigate(['UsuarioNuevo']);
	}
}
