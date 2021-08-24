import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appDemo]',
})
export class DemoDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    renderer.setStyle(el.nativeElement, 'backgroundColor', 'red');
  }

  @HostListener('mouseover') onMouseOver() {
    let part = this.el.nativeElement;
    this.renderer.setStyle(part, 'backgroundColor', 'green');
  }

  @HostListener('mouseout') onMouseout() {
    let part = this.el.nativeElement;
    this.renderer.setStyle(part, 'backgroundColor', 'red');
  }
}
