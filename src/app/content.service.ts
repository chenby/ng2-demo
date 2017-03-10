import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/Observable/throw'; 

@Injectable()
export class ContentService {

  constructor(private http: Http ) { }

  getData(){
  	const data = [{
  		id:1,
  		content:"content1"
  	},{
  		id:2,
  		content:"content2"
  	},{
  		id:3,
  		content:"content3"
  	}];
  	// return new Promise(function(resolve,reject){
  	// 	setTimeout(function(){
  	// 		resolve(data);
  	// 	},100)
  	// });
    return this.http.get('/asd').catch(function(error){
      return Observable.throw(error);
    })
  }
}
