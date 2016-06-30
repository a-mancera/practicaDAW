import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Mensaje {  
    id?: number;
    remitente:string;
	emisor:string;
	asunto:string;
	mensaje:string;
	leido:boolean;		
}
const URL = 'mensajes/';

@Injectable()
export class MensajeService {

  constructor(private http: Http) { }

  getMensajes() {
    return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  getMensaje(id: string) {
	    return this.http.get(URL+id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }
  
  getMensajeDetallado(id: string) {  
  	let nURL = 'mensajes/mensaje/';		
	    return this.http.get(nURL+id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }
  
  guardarMensaje(mensaje:Mensaje) {

   let body = JSON.stringify(mensaje);
    let headers = new Headers({
        'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  mensajeLeido(mensaje:Mensaje){
  	let body = JSON.stringify(mensaje);
    let headers = new Headers({
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(URL + mensaje.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
   eliminarMensaje(mensaje: mensaje) {
    return this.http.delete(URL+ mensaje.id)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }
  
    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}