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
var childComponent_1 = require("./childComponent");
// import {Newcomponent} from './childComponent.ts'; 
var DynamicInjComponent = (function () {
    //changes for new component
    function DynamicInjComponent(componentResolver, viewContainerRef) {
        var _this = this;
        this.componentResolver = componentResolver;
        this.viewContainerRef = viewContainerRef;
        //end of changes 
        //childComponent : ChildComponent;
        this.name = "rendering dialog content as dynamic";
        this.isChildModal = false;
        // This is potentially where the logic for creating the modal would be
        this.createDialog = function (contentVal) {
            _this.dialogObj = new ej2_ng_popups_1.Dialog({
                width: '335px',
                height: '200px',
                header: 'Simple Dialog',
                // TODO - Insert the component 'typeToCreate' as the content
                content: contentVal,
                target: document.getElementById('target'),
                isModal: true,
                animationSettings: { effect: 'None' },
                buttons: [{
                        click: _this.dlgButtonClick.bind(_this),
                        buttonModel: { content: 'OK', cssClass: 'e-flat', isPrimary: true }
                    }]
            });
            _this.dialogObj.appendTo('#modalDialog');
        };
    }
    DynamicInjComponent.prototype.openDialog = function () {
        var componentFactory = this.componentResolver.resolveComponentFactory(childComponent_1.Newcomponent);
        var ref = this.viewContainerRef.createComponent(componentFactory);
        var newCompEle = ref.instance.itemTemplate;
        this.createDialog(newCompEle.nativeElement);
    };
    DynamicInjComponent.prototype.dlgButtonClick = function () {
        this.dialogObj.destroy();
    };
    return DynamicInjComponent;
}());
__decorate([
    core_1.ViewChild('newContent'),
    __metadata("design:type", childComponent_1.Newcomponent)
], DynamicInjComponent.prototype, "newContent", void 0);
DynamicInjComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <div id=\"target\"  style=\"height:350px;\">\n      <h4>{{name}}</h4>\n      <div id=\"modalDialog\"> </div>\n      <br />\n      <br />\n      <br />\n      \n      <br />\n      <button (click)=\"openDialog()\">Open Dialog</button>\n    </div>\n  ",
        entryComponents: [childComponent_1.Newcomponent]
    }),
    __metadata("design:paramtypes", [core_1.ComponentFactoryResolver,
        core_1.ViewContainerRef])
], DynamicInjComponent);
exports.DynamicInjComponent = DynamicInjComponent;
//# sourceMappingURL=dynamicInj.component.js.map