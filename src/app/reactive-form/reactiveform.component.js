"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ej2_ng_popups_1 = require("@syncfusion/ej2-ng-popups");
var ReactiveForm = (function () {
    function ReactiveForm(formBuilder) {
        this.formBuilder = formBuilder;
        this.Initialheader = 'Sign-in';
        this.header = 'Success';
        this.width = '30%';
        this.animationSettings = { effect: 'None' };
        this.Dialogcontent = 'Details submitted successfully !';
        this.target = '#dlgTarget';
        this.visible = false;
        this.isModal = true;
        this.confirmationWidth = '100%';
    }
    ReactiveForm.prototype.BtnClick = function () {
        this.Dialog.show();
    };
    ReactiveForm.prototype.Submit = function () {
        this.onSubmit();
    };
    ReactiveForm.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            email: [null, [forms_1.Validators.required, forms_1.Validators.email]],
            password: [null, forms_1.Validators.required],
        });
    };
    ReactiveForm.prototype.isFieldValid = function (field) {
        return !this.form.get(field).valid && this.form.get(field).touched;
    };
    ReactiveForm.prototype.displayFieldCss = function (field) {
        return {
            'has-error': this.isFieldValid(field),
            'has-feedback': this.isFieldValid(field)
        };
    };
    ReactiveForm.prototype.onSubmit = function () {
        if (this.form.valid) {
            alert('You have successfully logined');
            this.form.reset();
            this.Dialog.hide();
        }
        else {
            this.validateAllFormFields(this.form);
        }
    };
    ReactiveForm.prototype.validateAllFormFields = function (formGroup) {
        var _this = this;
        Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);
            if (control instanceof forms_1.FormControl) {
                control.markAsTouched({ onlySelf: true });
            }
            else if (control instanceof forms_1.FormGroup) {
                _this.validateAllFormFields(control);
            }
        });
    };
    return ReactiveForm;
}());
__decorate([
    core_1.ViewChild('Dialog'),
    __metadata("design:type", ej2_ng_popups_1.DialogComponent)
], ReactiveForm.prototype, "Dialog", void 0);
__decorate([
    core_1.ViewChild('confirmationDialog'),
    __metadata("design:type", ej2_ng_popups_1.DialogComponent)
], ReactiveForm.prototype, "confirmationDialog", void 0);
ReactiveForm = __decorate([
    core_1.Component({
        selector: 'about',
        styleUrls: ['./reactiveform.css'],
        templateUrl: './reactiveform.component.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder])
], ReactiveForm);
exports.ReactiveForm = ReactiveForm;
//# sourceMappingURL=reactiveform.component.js.map