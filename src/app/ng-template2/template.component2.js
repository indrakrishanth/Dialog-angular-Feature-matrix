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
var TemplateComponent2 = (function () {
    function TemplateComponent2() {
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
            _this.defaultDialog.hide();
            document.getElementById('dialogBtn').style.display = 'block';
        };
        this.dialogBtnClick = function () {
            _this.updateContent = true;
            if (_this.defaultDialog != null) {
                _this.defaultDialog.visible = true;
            }
            document.getElementById('dialogBtn').style.display = 'none';
        };
    }
    return TemplateComponent2;
}());
__decorate([
    core_1.ViewChild('defaultDialog'),
    __metadata("design:type", ej2_ng_popups_1.DialogComponent)
], TemplateComponent2.prototype, "defaultDialog", void 0);
TemplateComponent2 = __decorate([
    core_1.Component({
        selector: 'app-container',
        templateUrl: './template.component2.html'
    })
], TemplateComponent2);
exports.TemplateComponent2 = TemplateComponent2;
//# sourceMappingURL=template.component2.js.map