import { Injectable, OnInit } from 'angular2/core';
import { Http, RequestOptions, Headers } from 'angular2/http';
import 'rxjs/Rx';

export interface User {  
    id?: number;
    name: string;
    pass: string;
    roles: string[];
    nombre:string;
    patrocinador:boolean;
    descripcion:string;
    web:string;
    tiposEventos: Array<string>;
    twitter:string;
    facebook:string;
    instagram:string;
    youtube:string;
    mensajes:string[];
}

export interface TipoEvento {
	tipo:string;
	checked:boolean;
} 

const URL = 'usuario/';

@Injectable()
export class LoginService {
	
	isLogged = false;
	isAdmin = false;
	user: User;
	
	constructor(private http: Http){
		this.reqIsLogged();
	}
	
	reqIsLogged(){
		
		let headers = new Headers({
			'X-Requested-With': 'XMLHttpRequest'
		});
			
		let options = new RequestOptions({headers});		
		
		this.http.get('logIn', options).subscribe(
			response => this.processLogInResponse(response),
			error => {
				if(error.status != 401){
					console.error("Error when asking if logged: "+
						JSON.stringify(error));	
				}				
			}
		);
	}
	
	getTiposEventos(){
		return this.http.get("http://127.0.0.1:8080/tiposEventos/")
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
	}
	
	crearUsuario(usuario:User){
		let body = JSON.stringify(usuario);
	    let headers = new Headers({
	        'Content-Type': 'application/json',
	        'X-Requested-With': 'XMLHttpRequest'
	    });
	    let options = new RequestOptions({ headers });
	
	    return this.http.post(URL, body, options)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
	}
	
	private processLogInResponse(response){
		this.isLogged = true;
		this.user = response.json();
		this.isAdmin = this.user.roles.indexOf("ROLE_ADMIN") !== -1;
	}
	
	isPatrocinador(){
		return this.user.patrocinador;
	}
	
	logIn(user: string, pass: string) {
		
		let userPass = user + ":" + pass;
					
		let headers = new Headers({
			'Authorization': 'Basic '+utf8_to_b64(userPass),
			'X-Requested-With': 'XMLHttpRequest'
		});
			
		let options = new RequestOptions({headers});		
		
		return this.http.get('logIn', options).map(
			response => {
				this.processLogInResponse(response);
				return this.user;
			}
		);		
	}
	
	
	
	logOut(){
		
		return this.http.get('logOut').map(
			response => {
				this.isLogged = false;
				this.isAdmin = false;
				return response;
			}
		);
	}	
}

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
        return String.fromCharCode(<any>'0x' + p1);
    }));
}