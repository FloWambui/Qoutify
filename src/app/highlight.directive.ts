import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {


  constructor(private elem:ElementRef) {}

  @HostListener('click') onClick(){
    // this.textDeco()
    this.elem.nativeElement.style.backgroundColor='salmon'
  }
  
  @HostListener('dblclick') onDoubleClicks(){
    // this.textDeco(false)
    this.elem.nativeElement.style.backgroundColor='black'
  }

  // private textDeco(action:boolean){
  //   // this.elem.nativeElement.style.backgroundColor='action'
  // }

  // constructor(private elem:ElementRef) {
  //   this.elem.nativeElement.style.backgroundColor='gold'
  //  }

}
function gold(gold: any) {
  throw new Error('Function not implemented.');
}

