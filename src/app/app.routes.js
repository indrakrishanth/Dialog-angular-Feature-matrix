"use strict";
var content_component_1 = require("./ng-content/content.component");
var dynamicInj_component_1 = require("./dynamic-injection/dynamicInj.component");
var dialog_component_1 = require("./dialog-feature-matrix/dialog.component");
var template_component_1 = require("./ng-template1/template.component");
var template_component2_1 = require("./ng-template2/template.component2");
var templateform_component_1 = require("./template-form/templateform.component");
var reactiveform_component_1 = require("./reactive-form/reactiveform.component");
var directive_component_1 = require("./directives/directive.component");
exports.rootRouterConfig = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'ng-content', component: content_component_1.ContentComponent },
    { path: 'dynamic-injection', component: dynamicInj_component_1.DynamicInjComponent },
    { path: 'dialog-feature-matrix', component: dialog_component_1.FeatureComponent },
    { path: 'ng-template1', component: template_component_1.TemplateComponent1 },
    { path: 'ng-template2', component: template_component2_1.TemplateComponent2 },
    { path: 'template-form', component: templateform_component_1.FormTemplate },
    { path: 'reactive-form', component: reactiveform_component_1.ReactiveForm },
    { path: 'directives', component: directive_component_1.DirectiveComponent },
];
//# sourceMappingURL=app.routes.js.map