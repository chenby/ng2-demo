import { Component, OnInit } from '@angular/core';

interface Model{
	name:String,
	phone:Number,
	password:String
}

class Model {
	constructor(name,phone,password){}
}

@Component({
  selector: 'app-artice2-components',
  templateUrl: './artice2-components.component.html',
  styleUrls: ['./artice2-components.component.scss']
})
export class Artice2ComponentsComponent implements OnInit {
  model:Model=new Model("","","");

  constructor() { }
  show(name){
  	console.log(name);
  }
    submitted = false;
	onSubmit() { this.submitted = true; console.log(this.model)}

  // onsubmit(value){
  // 	console.log("on:",value,this.model);
  //}
  // submit(){
  // 	console.log(this.model);
  // 	return false;
  // }
	ngOnInit() {
	  }

}
