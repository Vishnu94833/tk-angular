import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragAndDropRoutingModule } from './drag-and-drop-routing.module';
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    DragAndDropRoutingModule
  ]
})
export class DragAndDropModule { }
