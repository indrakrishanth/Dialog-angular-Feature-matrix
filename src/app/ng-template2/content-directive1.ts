import {Directive, ElementRef } from '@angular/core';


@Directive({
    selector: '[directiveContent]',
      })
  export class ContentDirective {
    constructor(element: ElementRef) {
        element.nativeElement.style.color = "red";
    }
  }