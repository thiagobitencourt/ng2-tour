import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: 'p[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _rendered: Renderer2
  ) {
    // this._elementRef.nativeElement.style.backgroundColor = 'yellow';
    this._rendered.setStyle(
      this._elementRef.nativeElement,
      'background-color',
      'yellow'
    );
  }

}
