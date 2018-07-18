import {Component, ElementRef, ViewChild, Compiler, ViewContainerRef, ComponentFactoryResolver, NgModule, VERSION, asNativeElements} from '@angular/core';
import { Dialog } from '@syncfusion/ej2-ng-popups';
import {Newcomponent} from './childComponent';
// import {Newcomponent} from './childComponent.ts'; 

@Component({
  selector: 'my-app',
  template: `
    <div id="target"  style="height:350px;">
      <h4>{{name}}</h4>
      <div id="modalDialog"> </div>
      <br />
      <br />
      <br />
      
      <br />
      <button (click)="openDialog()">Open Dialog</button>
    </div>
  `,
  entryComponents: [Newcomponent]
})
export class DynamicInjComponent {

  //changes for new component
    constructor(
      private componentResolver: ComponentFactoryResolver,
      protected viewContainerRef: ViewContainerRef ) {
    }
    @ViewChild('newContent')
    public newContent: Newcomponent;
  //end of changes 
  //childComponent : ChildComponent;
  public name: string = `rendering dialog content as dynamic`;
  public isChildModal: boolean = false;
 
  public dialogObj: Dialog;
  // This is potentially where the logic for creating the modal would be
  public createDialog = (contentVal: any) => {
       this.dialogObj = new Dialog({
        width: '335px',
        height: '200px',
        header: 'Simple Dialog',
        // TODO - Insert the component 'typeToCreate' as the content
        content: contentVal,
        target: document.getElementById('target'),
        isModal: true,
        animationSettings: { effect: 'None' },
        buttons: [{
            click: this.dlgButtonClick.bind(this),
            buttonModel: { content: 'OK', cssClass: 'e-flat', isPrimary: true }
        }]
    });
    this.dialogObj.appendTo('#modalDialog');
  }
  openDialog() {
    let componentFactory = this.componentResolver.resolveComponentFactory(Newcomponent);
    const ref = this.viewContainerRef.createComponent(componentFactory);
    let newCompEle = ref.instance.itemTemplate as (any);
    this.createDialog(newCompEle.nativeElement);
 }

  dlgButtonClick() {
    this.dialogObj.destroy();
  }
}
