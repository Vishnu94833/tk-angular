import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicReactiveFormComponent } from './dynamic-reactive-form.component';

const routes: Routes = [{ path: '', component: DynamicReactiveFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DynamicReactiveFormRoutingModule {}
