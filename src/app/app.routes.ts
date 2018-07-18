import { Routes } from '@angular/router';

import { ContentComponent } from './ng-content/content.component';
import { DynamicInjComponent } from './dynamic-injection/dynamicInj.component';
import { FeatureComponent } from './dialog-feature-matrix/dialog.component';
import { TemplateComponent1 } from './ng-template1/template.component';
import { TemplateComponent2 } from './ng-template2/template.component2';
import { FormTemplate } from './template-form/templateform.component';
import { ReactiveForm } from './reactive-form/reactiveform.component';
import { DirectiveComponent }  from './directives/directive.component';

export const rootRouterConfig: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'ng-content', component: ContentComponent },
  { path: 'dynamic-injection', component: DynamicInjComponent },
  { path: 'dialog-feature-matrix', component: FeatureComponent },
  { path: 'ng-template1', component: TemplateComponent1 },
  { path: 'ng-template2', component: TemplateComponent2 },
  { path: 'template-form', component: FormTemplate },
  { path: 'reactive-form', component: ReactiveForm },
  { path: 'directives', component: DirectiveComponent },
];
