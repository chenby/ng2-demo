import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lazy',
  template:'<h1>lazy</h1> <img src="http://img.zcool.cn/community/01594358b4cf8aa801219c77ef641f.jpg">'
})
export class lazyComponent implements OnInit {

  constructor() {
  	
  }
  ngOnInit() {
     
  }

}
