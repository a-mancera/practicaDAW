import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

export interface Comentario{  
	id?: number;
    evento:number;
    comentario:string;
	valoracion:number;
	fecha:string;
	usuario:string;
}

const URL = 'comentarios/';

@Injectable()
export class ComentarioService {

  constructor(private http: Http) { }

  
    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
    
    getComentarios(){
		return this.http.get(URL)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
	}
	
	getComentariosEvento(id:number){
		return this.http.get(URL+id)
	      .map(response => response.json())
	      .catch(error => this.handleError(error));
	}
}