import { Directive,HostBinding,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[sizer]'
})
export class DirectiveDirective {
@Input('sizer')
@HostBinding('style.width')
size:string;


@HostListener('click')
 onEnter() {
    this.size = '300px';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.size = '100px';
  }

  constructor() {

 this.size = '300px';    
 
  }


}
