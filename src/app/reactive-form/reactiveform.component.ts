import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';


@Component({
  selector: 'about',
  styleUrls: ['./reactiveform.css'],
  templateUrl: './reactiveform.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ReactiveForm {
  form: FormGroup;
  @ViewChild('Dialog')
  public Dialog: DialogComponent;

  @ViewChild('confirmationDialog')
  public confirmationDialog: DialogComponent
  BtnClick() {
      this.Dialog.show();
  }
  public Initialheader: string = 'Sign-in';
  public header: string = 'Success';
  public width: string = '30%';
  public animationSettings: Object = { effect: 'None' };

  public Dialogcontent: string = 'Details submitted successfully !';
  public target: string = '#dlgTarget';
  public visible: boolean=  false;
  public isModal: boolean= true;
  public confirmationWidth: string = '100%';

  Submit() {
          this.onSubmit();
  }
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, Validators.required],
    });
  }

  isFieldValid(field: string) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

  displayFieldCss(field: string) {
    return {
      'has-error': this.isFieldValid(field),
      'has-feedback': this.isFieldValid(field)
    };
  }

  onSubmit() {
    if (this.form.valid) {
      alert('You have successfully logined');
      this.form.reset();
      this.Dialog.hide();
    } else {
      this.validateAllFormFields(this.form);
    }
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }
}
