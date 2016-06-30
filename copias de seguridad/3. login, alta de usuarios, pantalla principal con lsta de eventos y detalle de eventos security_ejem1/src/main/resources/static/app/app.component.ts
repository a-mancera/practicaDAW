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

import {BookService} from './book.service';
import {LoginService} from './login.service';
import {EventoService} from './evento.service';

import {Alert} from 'ng2-bootstrap/ng2-bootstrap';

@Component({
  selector: 'app',
  templateUrl: 'app/app.component.html',
  providers:  [BookService, LoginService, EventoService, HTTP_PROVIDERS],
  directives: [LoginComponent, ROUTER_DIRECTIVES, Alert]
})
@RouteConfig([
  {path: '/eventos', name: 'Eventos', component: EventoListComponent, useAsDefault: true},
  {path: '/book/:id', name: 'BookDetail', component: BookDetailComponent},
  {path: '/book/new', name: 'BookNew', component: BookFormComponent},
  {path: '/book/edit/:id', name: 'BookEdit', component: BookFormComponent},
  {path: '/usuario', name: 'UsuarioNuevo', component: UserFormComponent},
  {path: '/evento/:id', name: 'EventoDetallado', component: EventoDetailComponent},
])
export class AppComponent {	
	constructor(private loginService: LoginService, private router:Router){}
	
	nuevoUsuario(){
		this.router.navigate(['UsuarioNuevo']);
	}
}
