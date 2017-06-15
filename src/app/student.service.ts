import { Injectable } from '@angular/core';
import {Http, Headers, Response, RequestOptions} from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";



@Injectable()
export class StudentService {

  constructor(private _http: Http) { }

  url="http://localhost:8080/api/";

  // findMovie(movie) {
  //   this.totReqsMade = this.totReqsMade + 1;
  //   return this._http.get(this.findMovieURL1 + movie + this.findMovieURL2)
  //     .map(response => {
  //       { return response.json() };
  //     })
  //     .catch(error => Observable.throw(error.json().error));
  // }


  add(student){
    return this._http.post(this.url+"add",student)
      .map(response => {
        { return response };
      }).catch(error => Observable.throw(error.json()));

  }

  findAll(){
    return this._http.get(this.url)
      .map(response => {
        { return response.json() };
      }).catch(error => Observable.throw(error.json()));
  }


  delete(id:number){
    return this._http.get(this.url+"remove/"+id)
      .map(response => {
        { return response };
      }).catch(error => Observable.throw(error.json()));
  }

  edit(student){
    return this._http.post(this.url+"update",student)
      .map(response => {
        { return response };
      }).catch(error => Observable.throw(error.json()));
  }

  upload(file){
    console.log('service : '+file.name);
    let formData:FormData = new FormData();
    formData.append('file', file, file.name);
    let headers = new Headers();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this.url+"upload",formData,options)
      .map(response => {
        { return response };
      }).catch(error => Observable.throw(error.json()));
  }


  registerStudent(formData,options){

    return this._http.post(this.url+"fileUpload3",formData,options)
      .map(response => {
        { return response };
      }).catch(error => Observable.throw(error.json()));


  }


}
