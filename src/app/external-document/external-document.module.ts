import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalDocumentComponent } from './external-document.component';
import { ExternalDocumentRoutingModule } from './external-document.routing.module';



@NgModule({
  declarations: [
    ExternalDocumentComponent
  ],
  imports: [
    CommonModule,
    ExternalDocumentRoutingModule
  ]
})
export class ExternalDocumentModule { }
