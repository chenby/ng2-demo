import { Directive, ElementRef, Input, Renderer } from '@angular/core';

@Directive({
  selector: '[appValidate]'
})
export class ValidateDirective {
  constructor(el:ElementRef,renderer:Renderer) { 
   renderer.setElementStyle(el.nativeElement, 'backgroundColor', 'yellow');
  }

}
