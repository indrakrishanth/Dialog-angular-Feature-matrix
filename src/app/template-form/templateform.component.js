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
var ej2_ng_popups_1 = require("@syncfusion/ej2-ng-popups");
var FormTemplate = (function () {
    function FormTemplate() {
        this.Initialheader = 'Template form';
        this.showCloseIcon = true;
        this.width = '30%';
        this.animationSettings = { effect: 'None' };
        this.target = '#dlgTarget';
        this.visible = false;
        this.isModal = true;
        this.confirmationWidth = '100%';
        this.isSubmitted = false;
    }
    FormTemplate.prototype.ngAfterViewInit = function () {
        document.getElementById('dlgbtn').focus();
    };
    FormTemplate.prototype.BtnClick = function () {
        this.confirmationDialog.show();
    };
    // On Dialog close, 'Open' Button will be shown
    FormTemplate.prototype.dialogClose = function () {
        document.getElementById('dlgbtn').style.display = '';
    };
    // On Dialog open, 'Open' Button will be hidden
    FormTemplate.prototype.dialogOpen = function () {
        document.getElementById('dlgbtn').style.display = 'none';
    };
    FormTemplate.prototype.ngOnInit = function () {
        this.UserDetails = {
            name: '',
            email: '',
            mobile: ''
        };
    };
    FormTemplate.prototype.onSubmit = function (form, isValid) {
        this.isSubmitted = true;
        if (isValid) {
            this.confirmationDialog.hide();
            document.getElementById('myForm').reset();
        }
    };
    return FormTemplate;
}());
__decorate([
    core_1.ViewChild('confirmationDialog'),
    __metadata("design:type", ej2_ng_popups_1.DialogComponent)
], FormTemplate.prototype, "confirmationDialog", void 0);
FormTemplate = __decorate([
    core_1.Component({
        selector: 'app-container',
        templateUrl: './templateform.component.html',
        styleUrls: ['./templateform.css']
    })
], FormTemplate);
exports.FormTemplate = FormTemplate;
//# sourceMappingURL=templateform.component.js.map