import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

const routes: Routes = [
  {
    path:"",
    component: DynamicFormComponent
  },
  {
    path:'test-form',
    loadComponent: ()=> import('./molecules/form/form.component').then((c)=> c.FormComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicFormsRoutingModule { }
