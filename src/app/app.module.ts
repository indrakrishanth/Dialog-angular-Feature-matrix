import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { rootRouterConfig } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { DialogComponent } from '@syncfusion/ej2-ng-popups';
import { DropDownListComponent } from '@syncfusion/ej2-ng-dropdowns';
import { AppComponent }  from './app.component';
import { ContentComponent } from './ng-content/content.component';
import { TemplateComponent1 } from './ng-template1/template.component';
import { TemplateComponent2 } from './ng-template2/template.component2';
import { FormTemplate } from './template-form/templateform.component';
import { ReactiveForm } from './reactive-form/reactiveform.component';
import { DynamicInjComponent } from './dynamic-injection/dynamicInj.component';
import { FeatureComponent } from './dialog-feature-matrix/dialog.component';
import { ChildComponent }  from './child.component';
import { DirectiveComponent }  from './directives/directive.component';
import { ContentDirective }  from './directives/content-directive1';
import {Newcomponent} from './dynamic-injection/childComponent';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';

// const appRoutes: Routes = [
//   { path: 'ng-content', component: NgContentComponent }
// ];

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(rootRouterConfig, { useHash: true })],
  declarations: [ AppComponent, DialogComponent, ContentComponent, FeatureComponent, DynamicInjComponent,  ChildComponent,
                 DropDownListComponent, Newcomponent, FieldErrorDisplayComponent, ContentDirective, TemplateComponent1, ReactiveForm, TemplateComponent2, FormTemplate, DirectiveComponent  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
