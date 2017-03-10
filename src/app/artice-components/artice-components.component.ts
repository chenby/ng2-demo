import { Component, OnInit } from '@angular/core';
import {ContentService} from '../content.service';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-artice-components',
  templateUrl: './artice-components.component.html',
  styleUrls: ['./artice-components.component.scss'],
  providers:[ContentService]
})
export class ArticeComponentsComponent implements OnInit {

  public content:Object;
  constructor(private ContentService:ContentService) {
  	
  }
  getData():void{
      let that = this;
     let a= this.ContentService.getData().toPromise().then(function(data){
       return that.content = data.json();
     })

  	// this.ContentService.getData().map(res=>res.json()).subscribe(data=>this.content=data);
  }

  ngOnInit() {
     
  }

}
