import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Propuesta {  
    id?: number;
    nombre:string;
	resumen:string;
	descripcion:string;
	direccion:string;
	organizador:string;
	tipo:string;
	fecha:string;
	hora:string;
	estimacionPatrocinio:number;
}

const URL = 'propuestas/';

@Injectable()
export class PropuestaService {
  constructor(private http: Http) { }

  getPropuestas() {
    return this.http.get(URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }
  
  getPropuesta(id: number) {
	    return this.http.get(URL+id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }
  
  crear(propuesta:Propuesta){
  	let body = JSON.stringify(propuesta);
	    let headers = new Headers({
	        'Content-Type': 'application/json',
	        'X-Requested-With': 'XMLHttpRequest'
	    });
	    let options = new RequestOptions({ headers });
	
	    return this.http.post(URL, body, options)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
  }
  
  eliminar(propuesta:Propuesta) {
    return this.http.delete(URL+ propuesta.id)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }
  
    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}