import { Component } from '@angular/core';

@Component({
  selector: 'wrapper',
  template: `
  <div style="color:blue;"> Content without using ng-content  </div>
  <ng-content></ng-content>
  `
})
export class ChildComponent {
}
