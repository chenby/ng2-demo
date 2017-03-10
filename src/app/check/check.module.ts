import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidateDirective } from './validate.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ValidateDirective
   ],
   exports:[
   	ValidateDirective
   ]
})
export class CheckModule { 
	constructor(){
	}
}
