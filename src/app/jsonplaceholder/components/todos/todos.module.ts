import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodosComponent } from './todos.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
  declarations: [TodosComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
