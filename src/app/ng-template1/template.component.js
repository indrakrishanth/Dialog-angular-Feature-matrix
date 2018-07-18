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
var TemplateComponent1 = (function () {
    function TemplateComponent1() {
        var _this = this;
        this.dialogHeader = 'Drag Me!!!';
        this.dialogCloseIcon = true;
        this.dialogWidth = '300px';
        this.dialogdragging = true;
        this.animationSettings = { effect: 'None' };
        this.target = '#dialogTarget';
        this.showCloseIcon = false;
        this.visible = true;
        this.dialogClose = function () {
            document.getElementById('dialogBtn').style.display = 'block';
        };
        this.dialogOpen = function () {
            document.getElementById('dialogBtn').style.display = 'none';
        };
        this.dlgBtnClick = function () {
            _this.updateContent = true;
        };
        this.dlgButtons = [{ click: this.dlgBtnClick.bind(this), buttonModel: { content: 'Update-Content', isPrimary: true } }];
        this.dialogBtnClick = function () {
            _this.defaultDialog.show();
            document.getElementById('dialogBtn').style.display = 'none';
        };
    }
    return TemplateComponent1;
}());
__decorate([
    core_1.ViewChild('defaultDialog'),
    __metadata("design:type", ej2_ng_popups_1.DialogComponent)
], TemplateComponent1.prototype, "defaultDialog", void 0);
TemplateComponent1 = __decorate([
    core_1.Component({
        selector: 'app-container',
        templateUrl: './template.component.html'
    })
], TemplateComponent1);
exports.TemplateComponent1 = TemplateComponent1;
//# sourceMappingURL=template.component.js.map