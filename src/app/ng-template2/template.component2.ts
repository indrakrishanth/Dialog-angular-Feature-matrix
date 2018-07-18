import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { EmitType, createElement } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-container',
  templateUrl: './template.component2.html'
})
export class TemplateComponent2 {
  @ViewChild('defaultDialog') defaultDialog: DialogComponent;
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
    this.defaultDialog.hide();
    document.getElementById('dialogBtn').style.display = 'block';
  }
  public dialogBtnClick: EmitType<Object> = () => {
    this.updateContent = true;
    if (this.defaultDialog != null) {
      this.defaultDialog.visible = true;
    }
    document.getElementById('dialogBtn').style.display = 'none';
  }
}
