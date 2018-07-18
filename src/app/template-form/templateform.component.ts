import { Component, ViewChild, OnInit, ElementRef } from '@angular/core';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';

@Component({
  selector: 'app-container',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.css']
})
export class FormTemplate {
  @ViewChild('confirmationDialog')
  public confirmationDialog: DialogComponent
  public Initialheader: string = 'Template form';
  public showCloseIcon: Boolean = true;
  public width: string = '30%';
  public animationSettings: Object = { effect: 'None' };
  public target: string = '#dlgTarget';
  public visible: boolean=  false;
  public isModal: boolean= true;
  public confirmationWidth: string = '100%';
  ngAfterViewInit():void {
    document.getElementById('dlgbtn').focus();
  }
  BtnClick() {
    this.confirmationDialog.show();
  }
  // On Dialog close, 'Open' Button will be shown
  dialogClose() {
      document.getElementById('dlgbtn').style.display = '';
  }
  // On Dialog open, 'Open' Button will be hidden
  dialogOpen() {
      document.getElementById('dlgbtn').style.display = 'none';
  }

  public isSubmitted: boolean = false;
  public UserDetails: UserDetails;

  ngOnInit() {
    this.UserDetails = {
      name: '',
      email:'',
      mobile: ''
    };
  }

  onSubmit(form: any, isValid: boolean) {
    this.isSubmitted = true;
    if(isValid) {
      this.confirmationDialog.hide();
      (<HTMLFormElement>document.getElementById('myForm')).reset()
    }
  }
}

export interface UserDetails {
name: string;
email: string;
mobile: string;
}
