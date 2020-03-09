import { Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appAlternativeViews]'
})
export class AlternativeViewsDirective {

  constructor(private el: ElementRef) {

  }
  @Input() highlightText: string;

  @HostListener('mouseenter') onMouseEnter(){
    this.highlight(this.highlightText);
  }

  private highlight(text: string){
    this.el.nativeElement.title = text;
  }

}
