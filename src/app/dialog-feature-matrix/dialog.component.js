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
var ej2_base_1 = require("@syncfusion/ej2-base");
var FeatureComponent = (function () {
    function FeatureComponent() {
        var _this = this;
        this.dialogHeader = 'Drag Me!!!';
        this.dialogCloseIcon = true;
        this.dialogWidth = '300px';
        this.contentData = "This is a dialog with draggable support.";
        this.dialogdragging = true;
        this.animationSettings = { effect: 'None' };
        this.target = '#dialogTarget';
        this.showCloseIcon = false;
        this.visible = true;
        this.themes = ['Fade', 'FadeZoom', 'FlipLeftDown', 'FlipLeftUp', 'FlipRightDown', 'FlipRightUp', 'FlipXDown', 'FlipXUp', 'FlipYLeft', 'FlipYRight', 'SlideBottom', 'SlideLeft', 'SlideRight', 'SlideTop', 'Zoom', 'None'];
        this.position = ['Left Top', 'Center Top', 'Right Top', 'Left Center', 'Center Center', 'Right Center', 'Left Bottom', 'Center Bottom', 'Right Bottom'];
        this.dialogBtnClick = function () {
            _this.defaultDialog.show();
            document.getElementById('dialogBtn').style.display = 'none';
        };
        this.hideDialog = function () {
            _this.defaultDialog.hide();
        };
        this.refreshDialog = function () {
            _this.defaultDialog.refreshPosition();
        };
        this.destroyDialog = function () {
            _this.defaultDialog.destroy();
        };
        this.onThemeChange = function (args) {
            _this.defaultDialog.animationSettings = { effect: args.value, duration: 400 };
            _this.defaultDialog.dataBind();
            _this.defaultDialog.hide();
            setTimeout(function () {
                _this.defaultDialog.show();
            }, 500);
        };
        this.onPositionChange = function (args) {
            _this.defaultDialog.position.X = args.value.split(" ")[0].toLowerCase();
            _this.defaultDialog.position.Y = args.value.split(" ")[1].toLowerCase();
            _this.defaultDialog.dataBind();
        };
        this.changePosition = function (args) {
            _this.defaultDialog.position.X = document.getElementById('xyValues').value.split(',')[0].trim();
            _this.defaultDialog.position.Y = document.getElementById('xyValues').value.split(',')[1].trim();
            _this.defaultDialog.dataBind();
        };
        this.changeContent = function () {
            _this.defaultDialog.content = document.getElementById("contentArea").value;
            _this.defaultDialog.dataBind();
        };
        this.changezIndex = function () {
            _this.defaultDialog.zIndex = parseInt(document.getElementById("zindex").value, 10);
            _this.defaultDialog.dataBind();
        };
        this.CreateButton = function () {
            var primaryEle = document.getElementById('primary');
            _this.defaultDialog.buttons = [{ buttonModel: { isPrimary: primaryEle.checked, content: document.getElementById('buttonText').value } }];
            _this.defaultDialog.dataBind();
        };
        this.changeHeight = function () {
            _this.defaultDialog.height = document.getElementById("height").value;
            _this.defaultDialog.dataBind();
        };
        this.changeWidth = function () {
            _this.defaultDialog.width = document.getElementById("width").value;
            _this.defaultDialog.dataBind();
        };
        this.changeHeader = function () {
            _this.defaultDialog.header = document.getElementById("headerArea").value;
            _this.defaultDialog.dataBind();
        };
        this.changeFooter = function () {
            _this.defaultDialog.footerTemplate = document.getElementById("footerArea").value;
            _this.defaultDialog.dataBind();
        };
        this.enableDrag = function () {
            if (_this.defaultDialog.allowDragging) {
                _this.defaultDialog.allowDragging = false;
                document.getElementById('drag').innerText = 'Enable dragging';
            }
            else {
                _this.defaultDialog.allowDragging = true;
                document.getElementById('drag').innerText = 'Disable dragging';
            }
        };
        this.closeOnEsc = function () {
            if (_this.defaultDialog.closeOnEscape) {
                _this.defaultDialog.closeOnEscape = false;
                document.getElementById('esc').innerText = 'Enable closeOnEsc';
            }
            else {
                _this.defaultDialog.closeOnEscape = true;
                document.getElementById('esc').innerText = 'Disable closeOnEsc';
            }
        };
        this.enableRtl = function () {
            if (_this.defaultDialog.enableRtl) {
                _this.defaultDialog.enableRtl = false;
                document.getElementById('rtl').innerText = 'Enable RTL';
            }
            else {
                _this.defaultDialog.enableRtl = true;
                document.getElementById('rtl').innerText = 'Disable RTL';
            }
        };
        this.isModel = function () {
            if (_this.defaultDialog.isModal) {
                _this.defaultDialog.isModal = false;
                document.getElementById('modal').innerText = 'Enable Modal';
            }
            else {
                _this.defaultDialog.isModal = true;
                document.getElementById('modal').innerText = 'Disable Modal';
            }
        };
        this.closeIcon = function () {
            if (_this.defaultDialog.showCloseIcon) {
                _this.defaultDialog.showCloseIcon = false;
                document.getElementById('closeicon').innerText = 'Show close icon';
            }
            else {
                _this.defaultDialog.showCloseIcon = true;
                document.getElementById('closeicon').innerText = 'Hide close icon';
            }
        };
        this.visibileDialog = function () {
            if (_this.defaultDialog.visible) {
                _this.defaultDialog.visible = false;
                document.getElementById('visible').innerText = 'Dialog visible';
            }
            else {
                _this.defaultDialog.visible = true;
                document.getElementById('visible').innerText = 'Dialog hide';
            }
        };
        this.dialogClose = function () {
            document.getElementById('dialogBtn').style.display = 'block';
            var element = ej2_base_1.createElement('p', { innerHTML: 'close event triggered' });
            document.getElementById('eventargs').appendChild(element);
        };
        this.dialogOpen = function () {
            document.getElementById('dialogBtn').style.display = 'none';
            var element = ej2_base_1.createElement('p', { innerHTML: 'open event triggered' });
            document.getElementById('eventargs').appendChild(element);
        };
        this.dialogBeforeClose = function () {
            var element = ej2_base_1.createElement('p', { innerHTML: 'before close event triggered' });
            document.getElementById('eventargs').appendChild(element);
        };
        this.dialogBeforeOpen = function () {
            var element = ej2_base_1.createElement('p', { innerHTML: 'before open event triggered' });
            document.getElementById('eventargs').appendChild(element);
        };
        this.dialogDrag = function () {
            var element = ej2_base_1.createElement('p', { innerHTML: 'drag event triggered' });
            document.getElementById('eventargs').appendChild(element);
        };
        this.dialogDragStart = function () {
            var element = ej2_base_1.createElement('p', { innerHTML: 'drag start event triggered' });
            document.getElementById('eventargs').appendChild(element);
        };
        this.dialogDragStop = function () {
            var element = ej2_base_1.createElement('p', { innerHTML: 'drag stop event triggered' });
            document.getElementById('eventargs').appendChild(element);
        };
        this.dialogCreated = function () {
            var element = ej2_base_1.createElement('p', { innerHTML: 'created event triggered' });
            document.getElementById('eventargs').appendChild(element);
        };
        this.refreshArgs = function () {
            document.getElementById('eventargs').innerText = '';
        };
    }
    return FeatureComponent;
}());
__decorate([
    core_1.ViewChild('defaultDialog'),
    __metadata("design:type", ej2_ng_popups_1.DialogComponent)
], FeatureComponent.prototype, "defaultDialog", void 0);
FeatureComponent = __decorate([
    core_1.Component({
        selector: 'app-container',
        templateUrl: './dialog.component.html'
    }),
    __metadata("design:paramtypes", [])
], FeatureComponent);
exports.FeatureComponent = FeatureComponent;
//# sourceMappingURL=dialog.component.js.map