import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { EmitType, createElement } from '@syncfusion/ej2-base';

@Component({
  selector: 'app-container',
  templateUrl: './dialog.component.html'
})
export class FeatureComponent {
  @ViewChild('defaultDialog')
  public defaultDialog: DialogComponent;
  public dialogHeader: string = 'Drag Me!!!';
  public dialogCloseIcon: Boolean = true;
  public dialogWidth: string = '300px';
  public contentData: string = "This is a dialog with draggable support.";
  public dialogdragging: Boolean = true;
  public animationSettings: Object = { effect: 'None' };
  public hide: any;
  public target: string = '#dialogTarget';
  public showCloseIcon: Boolean = false;
  public visible: Boolean = true;
  public themes: string[] = ['Fade', 'FadeZoom', 'FlipLeftDown', 'FlipLeftUp', 'FlipRightDown', 'FlipRightUp', 'FlipXDown', 'FlipXUp', 'FlipYLeft', 'FlipYRight', 'SlideBottom', 'SlideLeft', 'SlideRight', 'SlideTop', 'Zoom', 'None'];
  public position: string[] = ['Left Top', 'Center Top', 'Right Top', 'Left Center', 'Center Center', 'Right Center', 'Left Bottom', 'Center Bottom', 'Right Bottom'];

  public dialogBtnClick: EmitType<Object> = () => {
      this.defaultDialog.show();
      document.getElementById('dialogBtn').style.display = 'none';
  }

  public hideDialog = () => {
    this.defaultDialog.hide();
  }

  public refreshDialog = () => {
    this.defaultDialog.refreshPosition();
  }

  public destroyDialog = () => {
    this.defaultDialog.destroy();
  }

  public onThemeChange = (args: any) => {
    this.defaultDialog.animationSettings = { effect: args.value, duration: 400 };
    this.defaultDialog.dataBind();
    this.defaultDialog.hide();
    setTimeout(() => {
      this.defaultDialog.show();
    },500);
  }

  public onPositionChange = (args: any) => {
    this.defaultDialog.position.X = args.value.split(" ")[0].toLowerCase();
    this.defaultDialog.position.Y = args.value.split(" ")[1].toLowerCase();
    this.defaultDialog.dataBind();

  }

  public changePosition = (args: any) => {
    this.defaultDialog.position.X = (<any>document.getElementById('xyValues')).value.split(',')[0].trim();
    this.defaultDialog.position.Y = (<any>document.getElementById('xyValues')).value.split(',')[1].trim();
    this.defaultDialog.dataBind();
  }

  public changeContent = () => {
    this.defaultDialog.content = (<any>document.getElementById("contentArea")).value;
    this.defaultDialog.dataBind();
  }

  public changezIndex = () => {
    this.defaultDialog.zIndex = parseInt((<any>document.getElementById("zindex")).value, 10);
    this.defaultDialog.dataBind();
  }

  public CreateButton = () => {
    let primaryEle: any = document.getElementById('primary');
    this.defaultDialog.buttons = [{ buttonModel: {isPrimary: primaryEle.checked, content: (<any>document.getElementById('buttonText')).value } }];
    this.defaultDialog.dataBind();
  }

  public changeHeight = () => {
    this.defaultDialog.height = (<any>document.getElementById("height")).value;
    this.defaultDialog.dataBind();
  }

  public changeWidth = () => {
    this.defaultDialog.width = (<any>document.getElementById("width")).value;
    this.defaultDialog.dataBind();
  }

  public changeHeader = () => {
    this.defaultDialog.header = (<any>document.getElementById("headerArea")).value;
    this.defaultDialog.dataBind();
  }

  public changeFooter = () => {
    this.defaultDialog.footerTemplate = (<any>document.getElementById("footerArea")).value;
    this.defaultDialog.dataBind();
  }

  public enableDrag = () => {
    if(this.defaultDialog.allowDragging) {
      this.defaultDialog.allowDragging = false;
      document.getElementById('drag').innerText = 'Enable dragging';
    } else {
      this.defaultDialog.allowDragging = true;
      document.getElementById('drag').innerText = 'Disable dragging';
    }
  }

  public closeOnEsc = () => {    
    if(this.defaultDialog.closeOnEscape) {
      this.defaultDialog.closeOnEscape = false;
      document.getElementById('esc').innerText = 'Enable closeOnEsc';
    } else {
      this.defaultDialog.closeOnEscape = true;
      document.getElementById('esc').innerText = 'Disable closeOnEsc';
    }
  }

  public enableRtl = () => {  
    if(this.defaultDialog.enableRtl) {
      this.defaultDialog.enableRtl = false;
      document.getElementById('rtl').innerText = 'Enable RTL';
    } else {
      this.defaultDialog.enableRtl = true;
      document.getElementById('rtl').innerText = 'Disable RTL';
    }
  }
  public isModel = () => {
    if(this.defaultDialog.isModal) {
      this.defaultDialog.isModal = false;
      document.getElementById('modal').innerText = 'Enable Modal';
    } else {
      this.defaultDialog.isModal = true;
      document.getElementById('modal').innerText = 'Disable Modal';
    }
  }

  public closeIcon = () => {
    if(this.defaultDialog.showCloseIcon) {
      this.defaultDialog.showCloseIcon = false;
      document.getElementById('closeicon').innerText = 'Show close icon';
    } else {
      this.defaultDialog.showCloseIcon = true;
      document.getElementById('closeicon').innerText = 'Hide close icon';
    }
  }

  public visibileDialog = () => {
    if(this.defaultDialog.visible) {
      this.defaultDialog.visible = false;
      document.getElementById('visible').innerText = 'Dialog visible';
    } else {
      this.defaultDialog.visible = true;
      document.getElementById('visible').innerText = 'Dialog hide';
    }
  }

  public dialogClose: EmitType<Object> = () => {
      document.getElementById('dialogBtn').style.display = 'block';
      let element: Element = createElement('p', { innerHTML: 'close event triggered'});
      document.getElementById('eventargs').appendChild(element);
  }

  public dialogOpen: EmitType<Object> = () => {
    document.getElementById('dialogBtn').style.display = 'none';
    let element: Element = createElement('p', { innerHTML: 'open event triggered'});
    document.getElementById('eventargs').appendChild(element);
  }

  public dialogBeforeClose = () => {
    let element: Element = createElement('p', { innerHTML: 'before close event triggered'});
    document.getElementById('eventargs').appendChild(element);
  }

  public dialogBeforeOpen = () => {
    let element: Element = createElement('p', { innerHTML: 'before open event triggered'});
    document.getElementById('eventargs').appendChild(element);
  }

  public dialogDrag = () => {
    let element: Element = createElement('p', { innerHTML: 'drag event triggered'});
    document.getElementById('eventargs').appendChild(element);
  }

  public dialogDragStart = () => {
    let element: Element = createElement('p', { innerHTML: 'drag start event triggered'});
    document.getElementById('eventargs').appendChild(element);
  }

  public dialogDragStop = () => {
    let element: Element = createElement('p', { innerHTML: 'drag stop event triggered'});
    document.getElementById('eventargs').appendChild(element);
  }

  public dialogCreated = () => {
    let element: Element = createElement('p', { innerHTML: 'created event triggered'});
    document.getElementById('eventargs').appendChild(element);
  }

  public refreshArgs = () => {
    document.getElementById('eventargs').innerText = ''; 
  }

  constructor() { }

}
