import {
  Directive,
  ElementRef,
  Input,
  OnChanges,
  Renderer2
} from '@angular/core';

/**
 *
 * Pass template-driven form field as input as shown below,
 * [caseDetailFieldValidation]='customerFirstName.invalid && customerFirstName.touched'
 * In example above whenever field is invalid or touched, field with border red and error message will be shown
 */
@Directive({ selector: '[caseDetailFieldValidation]' })
export class CaseDetailRequiredFieldDirective
  implements OnChanges
{
  @Input() caseDetailFieldValidation: any;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.createErrorMessage();
  }


  private createErrorMessage() {
    const h4 = this.renderer.createElement('h4');
    const text = 'This Field is Required';
    const errorText = this.renderer.createText(text);
    const dataComponentId = this.elementRef.nativeElement.dataset.componentId + 'Error';
    this.renderer.setAttribute(h4, 'data-component-id', dataComponentId);
    this.renderer.addClass(h4, 'error-text');

    this.renderer.appendChild(h4, errorText);
    this.renderer.appendChild(this.elementRef.nativeElement.parentElement, h4);

    this.renderer.setStyle(h4, 'visibility', 'hidden');
  }

  ngOnChanges(): void {
    if (this.caseDetailFieldValidation) {
      this.renderer.nextSibling(
        this.elementRef.nativeElement
      ).style.visibility = 'initial';
      this.addClass(this.elementRef.nativeElement, 'error-border');
    } else {
      this.renderer.nextSibling(
        this.elementRef.nativeElement
      ).style.visibility = 'hidden';
      this.removeClass(this.elementRef.nativeElement, 'error-border');
    }
  }

  // private addRequiredText() {}

  // private removeRequiredText() {
  //   console.log(this.renderer.nextSibling(this.elementRef.nativeElement));

  //   if (this.renderer.nextSibling(this.elementRef.nativeElement)) {
  //     this.renderer.removeStyle(
  //       this.renderer.nextSibling(this.elementRef.nativeElement),
  //       'visibility'
  //     );
  //   }
  // }

  private addClass(el: any, className: any) {
    this.renderer.addClass(el, className);
  }

  private removeClass(el: any, className: any) {
    this.renderer.removeClass(el, className);
  }
}
