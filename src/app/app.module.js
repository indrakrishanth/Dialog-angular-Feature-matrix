"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_routes_1 = require("./app.routes");
var platform_browser_1 = require("@angular/platform-browser");
var ej2_ng_popups_1 = require("@syncfusion/ej2-ng-popups");
var ej2_ng_dropdowns_1 = require("@syncfusion/ej2-ng-dropdowns");
var app_component_1 = require("./app.component");
var content_component_1 = require("./ng-content/content.component");
var template_component_1 = require("./ng-template1/template.component");
var template_component2_1 = require("./ng-template2/template.component2");
var templateform_component_1 = require("./template-form/templateform.component");
var reactiveform_component_1 = require("./reactive-form/reactiveform.component");
var dynamicInj_component_1 = require("./dynamic-injection/dynamicInj.component");
var dialog_component_1 = require("./dialog-feature-matrix/dialog.component");
var child_component_1 = require("./child.component");
var directive_component_1 = require("./directives/directive.component");
var content_directive1_1 = require("./directives/content-directive1");
var childComponent_1 = require("./dynamic-injection/childComponent");
var field_error_display_component_1 = require("./field-error-display/field-error-display.component");
// const appRoutes: Routes = [
//   { path: 'ng-content', component: NgContentComponent }
// ];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, router_1.RouterModule.forRoot(app_routes_1.rootRouterConfig, { useHash: true })],
        declarations: [app_component_1.AppComponent, ej2_ng_popups_1.DialogComponent, content_component_1.ContentComponent, dialog_component_1.FeatureComponent, dynamicInj_component_1.DynamicInjComponent, child_component_1.ChildComponent,
            ej2_ng_dropdowns_1.DropDownListComponent, childComponent_1.Newcomponent, field_error_display_component_1.FieldErrorDisplayComponent, content_directive1_1.ContentDirective, template_component_1.TemplateComponent1, reactiveform_component_1.ReactiveForm, template_component2_1.TemplateComponent2, templateform_component_1.FormTemplate, directive_component_1.DirectiveComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map