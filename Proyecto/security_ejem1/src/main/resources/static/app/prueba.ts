import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {MultipartItem} from "./multipart-upload/multipart-item";
import {MultipartUploader} from "./multipart-upload/multipart-uploader";
import {ROUTER_DIRECTIVES, RouteParams, Router} from 'angular2/router';


@Component({
    directives: [ROUTER_DIRECTIVES],
    template: `
    <div class="container">

	<h1>New Image</h1>

	<form>
		<div class="form-group">
			<label for="exampleInputEmail1">Description</label> <input
				type="text" class="form-control" [(ngModel)]="description">
		</div>
		<div class="form-group">
			<label for="exampleInputFile">File input</label> <input type="file"
				(change)="selectFile($event)">
		</div>
		<button type="submit" class="btn btn-default" (click)="upload()">Submit</button>
	</form>
	<p>{{mensaje}}</p>
	<h1>Images</h1>

	<div *ngFor="#image of images">
		<img src="/images/{{image.fileName}}" />
		<span>{{image.description}}</span> 
	</div>


</div>
  `
})
export class Prueba implements OnInit {
	private file: File;
	mensaje = 'hola';
	private images: String[] = [];
	
   constructor(private router:Router,private http: Http) {}

    ngOnInit(){
		this.loadImages();
	}
	
	loadImages(){
		
		this.http.get("/images").subscribe(
			response => this.images = response.json();
		)		
	}
	
	selectFile($event) {		
		this.file = $event.target.files[0];
		
		console.debug("Selected file: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);		
	}
	
	upload() {
		
		console.debug("Uploading file...");

		if (this.file == null){
			console.error("You have to select a file and set a description.");
			return;
		}		
		
		let formData = new FormData();
		formData.append("nombre", 'evento1');			
		formData.append("file",  this.file);

		let multipartItem = new MultipartItem(new MultipartUploader({url: '/image/upload'}));
		
		multipartItem.formData = formData;
		
		multipartItem.callback = (data, status, headers) => {
						
			if (status == 200){				
				console.debug("File has been uploaded");
				this.loadImages();				
			} else {
				console.error("Error uploading file");
			}
		};
		
		multipartItem.upload();
	}
    
    

}