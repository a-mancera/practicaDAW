import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Evento {  
    id?: number;
    nombre: string;
    resumen:string;
	descripcion:string;
	direccion:string;
	patrocinador:string;
	organizador:string;
	tipo:string;
	fecha:string;
	hora:string;
}

const URL = 'eventos/';

@Injectable()
export class EventoService {

  constructor(private http: Http) { }

  getEventos() {
    return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  getEvento(id: number) {
	    return this.http.get(URL+id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }
  
  crear(evento:Evento){
  	let body = JSON.stringify(evento);
	    let headers = new Headers({
	        'Content-Type': 'application/json',
	        'X-Requested-With': 'XMLHttpRequest'
	    });
	    let options = new RequestOptions({ headers });
	
	    return this.http.post(URL, body, options)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }
  
    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}