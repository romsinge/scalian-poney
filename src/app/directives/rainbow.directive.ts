import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {

  constructor(private el: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('dblclick') handleDoubleClick() {
    this.el.nativeElement.src = this.el.nativeElement.src.replace('running', 'rainbow')
  }
}
