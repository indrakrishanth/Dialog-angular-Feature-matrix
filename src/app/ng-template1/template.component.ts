import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { EmitType, createElement } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-container',
  templateUrl: './template.component.html'
})
export class TemplateComponent1 {
  @ViewChild('defaultDialog')
  public defaultDialog: DialogComponent;
  public dialogHeader: string = 'Drag Me!!!';
  public dialogCloseIcon: Boolean = true;
  public dialogWidth: string = '300px';
  public dialogdragging: Boolean = true;
  public animationSettings: Object = { effect: 'None' };
  public hide: any;
  public target: string = '#dialogTarget';
  public showCloseIcon: Boolean = false;
  public visible: Boolean = true;
  public updateContent: Boolean;
  public dialogClose: EmitType<Object> = () => {
    document.getElementById('dialogBtn').style.display = 'block';
}
public dialogOpen: EmitType<Object> = () => {
  document.getElementById('dialogBtn').style.display = 'none';
}
public dlgBtnClick: EmitType<Object> = () => {
  this.updateContent = true;
}
public dlgButtons: Object[] = [{ click: this.dlgBtnClick.bind(this), buttonModel: { content: 'Update-Content', isPrimary: true } }];
public dialogBtnClick: EmitType<Object> = () => {
  this.defaultDialog.show();
  document.getElementById('dialogBtn').style.display = 'none';
}
}
