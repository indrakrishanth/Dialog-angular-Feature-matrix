import {Component, ViewChild, TemplateRef} from '@angular/core';

@Component({
  selector: 'new-component',
  template: `
    <div #itemTemplate>
    <div #newContent>
      <input class="e-input" type="text" placeholder="Component newly injected" />
    </div>
    </div>
  `,
})
export class Newcomponent {
    @ViewChild('itemTemplate')
    public itemTemplate: TemplateRef<any>;
}
