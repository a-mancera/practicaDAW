import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Reseña {  
    id?: number;
    evento:number;
    reseña:string;
	valoracion:number;
	fecha:string;
	usuario:string;
	fecha:string;
	usuario:string;
}

const URL = 'resenas/';

@Injectable()
export class ReseñaService {

  constructor(private http: Http) { }
	
	getReseñas(){
		return this.http.get(URL)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
	}
	
	getReseñasEvento(evento:number){
		return this.http.get(URL+evento)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
	}
  
    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}