import { Router } from '@angular/router';
import { Injectable, Injector, ComponentFactoryResolver, ComponentRef,ViewContainerRef } from '@angular/core';
import { Component, ViewChild } from '@angular/core';


@Component({
  selector:"xm",
  template:"<h1>aaaaaaa</h1>"
})
export class xm{
  data={
    a:123
  }
  constructor(){
    
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
   modalContentRef;
  constructor( private componentFactoryResolver: ComponentFactoryResolver,private modalContentContainer: ViewContainerRef,private  injector: Injector) {
     const componentFactory= this.componentFactoryResolver.resolveComponentFactory(xm);
     this.modalContentRef = this.modalContentContainer.createComponent(componentFactory, this.modalContentContainer.length, this.injector);
     console.log(this.modalContentRef);
     const instance = this.modalContentRef.instance;
      instance.content = {
        user:123,
        name:"asd"
      }
      console.log(instance);
  }
   
  ngOnDestroy(): void {
    this.modalContentRef.destroy();
  }
  handle() {
    
  }
}
