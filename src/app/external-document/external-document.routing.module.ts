import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalDocumentComponent } from './external-document.component';

const routes: Routes = [
  {
    path:"",
    component: ExternalDocumentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalDocumentRoutingModule { }
